import { ReactElement } from 'react';
import { NextPage } from 'next';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { RegisterComponent } from '~components/auth';

const RegisterPage: NextPage = (): ReactElement => {
    const contentJSX = (
        <ContentView
            content = { <RegisterComponent /> }
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

export default RegisterPage;
