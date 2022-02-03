import { ReactElement } from 'react';
import { NextPage } from 'next';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { LoginComponent } from '~components/auth';

const LoginPage: NextPage = (): ReactElement => {
    const contentJSX = (
        <ContentView
            content = { <LoginComponent /> }
        />
    );

    return (
        <AppView
            content = { contentJSX }
        />
    );
};

export default LoginPage;
