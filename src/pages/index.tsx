import { ReactElement } from 'react';
import {
    NextPage, GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext, Redirect,
} from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useStore } from '~lib/context/contextProvider';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { ProfileCardComponent } from '~components/profileCard';
import { HeaderComponent } from '~components/header';
import { FooterComponent } from '~components/footer';
import { CoursesComponent } from '~components/courses';
import { CourseService, UserService } from '~services';
import { getAuthData, getLocale } from '~utils';
import {
    ICommonContextData, ICourse, IDehydratedState, IGetCoursesProps, TContext,
} from '~types';
import { QUERY_KEYS, useQueryData } from '~lib/reactQuery/queryClient';

const Home: NextPage = (): ReactElement => {
    const { isLogged } = useStore() as ICommonContextData;
    const courses = useQueryData<ICourse[], IGetCoursesProps>(QUERY_KEYS.GET_ALL_COURSES);

    const contentJSX = (
        <ContentView
            content = { <CoursesComponent courses = { courses } /> }
            sider = { isLogged ? <ProfileCardComponent /> : null }
        />
    );

    return (
        <>
            <Head>
                <title>Lectrum LLC</title>
            </Head>
            <AppView
                header = { <HeaderComponent /> }
                content = { contentJSX }
                footer = { <FooterComponent /> }
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<Redirect | (TContext & SSRConfig & IDehydratedState)> =
    async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Redirect | (TContext & SSRConfig & IDehydratedState)>> => {
        const { isLogged } = await getAuthData(ctx);

        const courseService = new CourseService();
        const userService = new UserService();
        const queryClient = new QueryClient();

        await queryClient.prefetchQuery(QUERY_KEYS.GET_ALL_COURSES, () => courseService.get());
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

export default Home;
