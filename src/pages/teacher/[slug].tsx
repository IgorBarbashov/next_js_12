import { ReactElement } from 'react';
import {
    NextPage, GetStaticProps, GetStaticPaths, GetStaticPathsResult, GetStaticPropsResult,
} from 'next';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { TeacherComponent } from '~components/teacher';
import { FooterComponent } from '~components/footer';
import { CourseService } from '~services';
import { TEACHER_PAGE } from '~constants';
import { ITeacherContext, ITeacherDynamicPathSegment } from '~types';

const TeacherPage: NextPage = (): ReactElement => (
    <AppView
        header = { <HeaderComponent /> }
        content = { <TeacherComponent /> }
        footer = { <FooterComponent /> }
    />
);

export const getStaticPaths: GetStaticPaths<ITeacherDynamicPathSegment> = async (): Promise<GetStaticPathsResult<ITeacherDynamicPathSegment>> => {
    const paths = TEACHER_PAGE.VALID_SLUGS.map((slug) => ({ params: { slug } }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ITeacherContext, ITeacherDynamicPathSegment> = async ({
    params,
}): Promise<GetStaticPropsResult<ITeacherContext>> => {
    const teacher = {
        avatarSrc: '/images/hd_dp.jpg',
        name: 'Joginder Singh',
        professional: 'UI / UX Designer and Web Developer',
    };

    let courses = null;
    const courseService = new CourseService();
    try {
        const { data } = await courseService.get();
        courses = data?.data || null;
    } catch (e) {
        process.stderr.write('API error');
    }

    return {
        props: {
            contextData: {
                teacher,
                courses,
                slug: params?.slug ?? '',
            },
        },
        revalidate: 15,
    };
};

export default TeacherPage;
