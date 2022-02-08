import { ReactElement } from 'react';
import {
    GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage,
} from 'next';
import Head from 'next/head';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { RegisterComponent } from '~components/auth';
import { getAuthData, redirectIsLogged } from '~utils';

const RegisterPage: NextPage = (): ReactElement => {
    const contentJSX = (
        <ContentView
            content = { <RegisterComponent /> }
            sider = { null }
        />
    );

    return (
        <>
            <Head>
                <title>Registration</title>
            </Head>
            <AppView
                header = { null }
                content = { contentJSX }
                footer = { null }
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{}> =
    async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{}>> => {
        const { isLogged } = await getAuthData(ctx);
        return redirectIsLogged(isLogged, '/teacher/about');
    };

export default RegisterPage;
