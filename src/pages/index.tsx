import { ReactElement } from 'react';
import {
    NextPage, GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext,
} from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { HeaderComponent } from '~components/header';
import { FooterComponent } from '~components/footer';
import { CoursesComponent } from '~components/courses';
import { ProfileCardComponent } from '~components/profileCard';
import { CourseService } from '~services';
import { useStore } from '~lib/context/contextProvider';
import { ICommonContextData, TCoursesContext, TUserContext } from '~types';
import { getAuthData, getLocale } from '~utils';

const Home: NextPage = (): ReactElement => {
    const { isLogged = false } = useStore() as ICommonContextData;

    const contentJSX = (
        <ContentView
            content = { <CoursesComponent /> }
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

export const getServerSideProps: GetServerSideProps<(TCoursesContext | TUserContext) & SSRConfig> =
    async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<(TCoursesContext | TUserContext) & SSRConfig>> => {
        const { isLogged, profile } = await getAuthData(ctx);

        const courseService = new CourseService();
        let courses = null;
        try {
            const { data } = await courseService.get();
            courses = data?.data || null;
        } catch (e) {
            process.stderr.write('API error');
        }

        return {
            props: {
                contextData: {
                    isLogged,
                    profile,
                    courses,
                },
                ...await serverSideTranslations(getLocale(ctx), ['common']),
            },
        };
    };

export default Home;
