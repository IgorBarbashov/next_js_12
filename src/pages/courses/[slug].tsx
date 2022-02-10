import { ReactElement } from 'react';
import {
    NextPage, GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext,
} from 'next';
import Head from 'next/head';
import { SSRConfig, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { QUERY_KEYS, useQueryData } from '~lib/reactQuery/queryClient';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { CourseComponent } from '~components/course';
import { FooterComponent } from '~components/footer';
import { CourseService, UserService } from '~services';
import { getAuthData, getLocale } from '~utils';
import {
    ICoursesDynamicPathSegment, TContext, IDehydratedState, ICourse, IGetCourseProps,
} from '~types';

const CoursePage: NextPage = (): ReactElement => {
    const { query: { slug = '' } } = useRouter();
    const course = useQueryData<ICourse, IGetCourseProps>(
        [QUERY_KEYS.INCREASE_VIEWS_COUNT_AND_GET_COURSE, slug as string],
    );
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

export const getServerSideProps: GetServerSideProps<TContext & SSRConfig & IDehydratedState, ICoursesDynamicPathSegment> = (
    async (
        ctx: GetServerSidePropsContext<ICoursesDynamicPathSegment>,
    ): Promise<GetServerSidePropsResult<TContext & SSRConfig & IDehydratedState>> => {
        const { isLogged } = await getAuthData(ctx);
        const { params } = ctx;
        const slug = params?.slug ?? '';

        const userService = new UserService();
        const courseService = new CourseService();
        const queryClient = new QueryClient();

        await queryClient.prefetchQuery(
            [QUERY_KEYS.INCREASE_VIEWS_COUNT_AND_GET_COURSE, slug],
            () => courseService.increaseViewsCount({ id: slug }),
        );
        await queryClient.prefetchQuery(QUERY_KEYS.GET_USER_PROFILE, () => userService.getProfile());

        return {
            props: {
                contextData: {
                    isLogged,
                },
                dehydratedState: dehydrate(queryClient),
                ...await serverSideTranslations(getLocale(ctx), ['common']),
            },
        };
    });

export default CoursePage;
