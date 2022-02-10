import { ReactElement } from 'react';
import {
    NextPage, GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext,
} from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig, useTranslation } from 'next-i18next';
import { QueryClient } from 'react-query';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { TeacherComponent } from '~components/teacher';
import { FooterComponent } from '~components/footer';
import { TeacherService, UserService } from '~services';
import { getAuthData, getLocale, redirectObject } from '~utils';
import { IDehydratedState, TContext } from '~types';
import { dehydrate } from 'react-query/hydration';
import { useRouter } from 'next/router';
import { QUERY_KEYS } from '~lib/reactQuery/queryClient';

const TeacherPage: NextPage = (): ReactElement => {
    const { query: { slug = '' } } = useRouter();
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>{ `${t('common:teacherPageTitle')} - ${slug}` }</title>
            </Head>
            <AppView
                header = { <HeaderComponent /> }
                content = { <TeacherComponent /> }
                footer = { <FooterComponent /> }
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<TContext & SSRConfig & IDehydratedState> = async (
    ctx: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<TContext & SSRConfig & IDehydratedState>> => {
    const { isLogged } = await getAuthData(ctx);
    if (!isLogged) {
        return redirectObject({ destination: '/login' });
    }

    const userService = new UserService();
    const teacherService = new TeacherService();
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(QUERY_KEYS.GET_TEACHER_COURSES, () => teacherService.getCourses());
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
};

export default TeacherPage;
