import { ReactElement } from 'react';
import {
    NextPage, GetStaticProps, GetStaticPaths, GetStaticPropsResult,
    GetStaticPathsResult,
} from 'next';
import axios, { AxiosError } from 'axios';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { CourseComponent } from '~components/course';
import { FooterComponent } from '~components/footer';
import { CourseService } from '~services';
import { TCourseContext, ICoursesDynamicPathSegment } from '~types';

const CoursePage: NextPage = (): ReactElement => (
    <AppView
        header = { <HeaderComponent /> }
        content = { <CourseComponent /> }
        footer = { <FooterComponent /> }
    />
);

export const getStaticPaths: GetStaticPaths<ICoursesDynamicPathSegment> = async (): Promise<GetStaticPathsResult<ICoursesDynamicPathSegment>> => {
    const courseService = new CourseService();
    const { data } = await courseService.get(1, 100);
    const courses = data?.data || [];
    const paths = courses.map(({ hash }) => ({ params: { slug: hash } }));
    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<TCourseContext, ICoursesDynamicPathSegment> = async ({
    params,
}): Promise<GetStaticPropsResult<TCourseContext>> => {
    const courseService = new CourseService();
    let course = null;

    try {
        const { data } = await courseService.getById(params?.slug ?? '');
        course = data?.data ?? null;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            const axiosError = e as AxiosError;
            if (axiosError.response?.status === 404) {
                return {
                    notFound: true,
                };
            }
        }
        process.stderr.write('API error');
    }

    return {
        props: {
            contextData: {
                course,
            },
        },
        revalidate: 15,
    };
};

export default CoursePage;
