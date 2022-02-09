import { ReactElement } from 'react';
import {
    NextPage, GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext,
} from 'next';
import Head from 'next/head';
import axios, { AxiosError } from 'axios';
import { SSRConfig, useTranslation } from 'next-i18next';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { CourseComponent } from '~components/course';
import { FooterComponent } from '~components/footer';
import { CourseService } from '~services';
import { useStore } from '~lib/context/contextProvider';
import {
    TCourseContext, ICoursesDynamicPathSegment, TUserContext, ICourseContextData,
} from '~types';
import { getAuthData, getLocale } from '~utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CoursePage: NextPage = (): ReactElement => {
    const { course } = useStore() as ICourseContextData;
    const { t } = useTranslation();

    const defaultPageTitle = `Lectrum LLC | ${t('common:coursesPageTitle')}`;
    const pageTitle = course?.description ?? defaultPageTitle;

    return (
        <>
            <Head>
                <title>{ pageTitle }</title>
            </Head>
            <AppView
                header = { <HeaderComponent /> }
                content = { <CourseComponent /> }
                footer = { <FooterComponent /> }
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<(TCourseContext | TUserContext) & SSRConfig, ICoursesDynamicPathSegment> = (
    async (
        ctx: GetServerSidePropsContext<ICoursesDynamicPathSegment>,
    ): Promise<GetServerSidePropsResult<(TCourseContext | TUserContext
) & SSRConfig>> => {
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
                ...await serverSideTranslations(getLocale(ctx), ['common']),
            },
        };
    });

export default CoursePage;
