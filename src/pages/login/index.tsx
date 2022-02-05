import { ReactElement } from 'react';
import { NextPage } from 'next';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { LoginComponent } from '~components/auth';

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

export default LoginPage;
