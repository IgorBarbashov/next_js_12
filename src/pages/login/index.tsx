import { ReactElement } from 'react';
import {
    GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult,
    NextPage, Redirect,
} from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig, useTranslation } from 'next-i18next';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { LoginComponent } from '~components/auth';
import { getAuthData, getLocale, redirectObject } from '~utils';

const LoginPage: NextPage = (): ReactElement => {
    const { t } = useTranslation();

    const contentJSX = (
        <ContentView
            content = { <LoginComponent /> }
            sider = { null }
        />
    );

    return (
        <>
            <Head>
                <title>{ t('common:signInPageTitle') }</title>
            </Head>
            <AppView
                header = { null }
                content = { contentJSX }
                footer = { null }
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<Redirect | SSRConfig> =
    async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Redirect | SSRConfig>> => {
        const { isLogged } = await getAuthData(ctx);
        return isLogged
            ? redirectObject({ destination: '/teacher/about' })
            : {
                props: {
                    ...await serverSideTranslations(getLocale(ctx), ['common']),
                },
            };
    };

export default LoginPage;
