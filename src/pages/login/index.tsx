import { ReactElement } from 'react';
import {
    GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage,
} from 'next';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { LoginComponent } from '~components/auth';
import { getAuthData, redirectIsLogged } from '~utils';

const LoginPage: NextPage = (): ReactElement => {
    const contentJSX = (
        <ContentView
            content = { <LoginComponent /> }
            sider = { null }
        />
    );

    return (
        <AppView
            header = { null }
            content = { contentJSX }
            footer = { null }
        />
    );
};

export const getServerSideProps: GetServerSideProps<{}> =
    async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{}>> => {
        const { isLogged } = await getAuthData(ctx);
        return redirectIsLogged(isLogged);
    };

export default LoginPage;
