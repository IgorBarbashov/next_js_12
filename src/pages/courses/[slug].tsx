import { ReactElement } from 'react';
import {
    NextPage, GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext,
} from 'next';
import Head from 'next/head';
import axios, { AxiosError } from 'axios';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { CourseComponent } from '~components/course';
import { FooterComponent } from '~components/footer';
import { CourseService } from '~services';
import { useStore } from '~lib/context/contextProvider';
import {
    TCourseContext, ICoursesDynamicPathSegment, TUserContext, ICourseContextData,
} from '~types';
import { getAuthData } from '~utils';

const CoursePage: NextPage = (): ReactElement => {
    const { course } = useStore() as ICourseContextData;

    return (
        <>
            <Head>
                <title>{ `${course?.description ?? 'Lectrum LLC | Courses'}` }</title>
            </Head>
            <AppView
                header = { <HeaderComponent /> }
                content = { <CourseComponent /> }
                footer = { <FooterComponent /> }
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<TCourseContext | TUserContext, ICoursesDynamicPathSegment> = (
    async (
        ctx: GetServerSidePropsContext<ICoursesDynamicPathSegment>,
    ): Promise<GetServerSidePropsResult<TCourseContext | TUserContext>> => {
        const { isLogged, profile } = await getAuthData(ctx);
        const { params } = ctx;

        const courseService = new CourseService();
        let course = null;

        try {
            const { data } = await courseService.increaseViewsCount(params?.slug ?? '');
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
                    isLogged,
                    profile,
                    course,
                },
            },
        };
    });

export default CoursePage;
