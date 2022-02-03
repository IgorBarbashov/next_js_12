import { ReactElement } from 'react';
import { NextPage } from 'next';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { RegisterComponent } from '~components/auth';

const RegisterPage: NextPage = (): ReactElement => {
    const contentJSX = (
        <ContentView
            content = { <RegisterComponent /> }
        />
    );

    return (
        <AppView
            content = { contentJSX }
        />
    );
};

export default RegisterPage;
