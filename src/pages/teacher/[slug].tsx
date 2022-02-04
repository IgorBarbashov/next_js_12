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
import { IUserContext, IUserDynamicPathSegment, TCoursesContext } from '~types';

const TeacherPage: NextPage = (): ReactElement => (
    <AppView
        header = { <HeaderComponent /> }
        content = { <TeacherComponent /> }
        footer = { <FooterComponent /> }
    />
);

export const getStaticPaths: GetStaticPaths<IUserDynamicPathSegment> =
    async (): Promise<GetStaticPathsResult<IUserDynamicPathSegment>> => {
        const paths = TEACHER_PAGE.VALID_SLUGS.map((slug) => ({ params: { slug } }));
        return { paths, fallback: false };
    };

export const getStaticProps: GetStaticProps<IUserContext | TCoursesContext, IUserDynamicPathSegment> =
    async ({ params }): Promise<GetStaticPropsResult<IUserContext | TCoursesContext>> => {
        const user = {
            avatar: '/images/hd_dp.jpg',
            name: 'Joginder Singh',
            hash: 'hash',
            email: 'teacher@teacher.com',
        };

        let courses = null;
        const courseService = new CourseService();
        try {
            const { data } = await courseService.get();
            courses = data?.data || null;
        } catch (e) {
            process.stderr.write('API error');
        }

        if (user === null) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                contextData: {
                    user,
                    courses,
                    slug: params?.slug ?? '',
                },
            },
            revalidate: 15,
        };
    };

export default TeacherPage;
