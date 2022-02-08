import { FC, ReactElement } from 'react';
import { AuthFooterElement, AuthHeaderElement, LoginFormElement } from '~elements/auth';

export const LoginComponent: FC = (): ReactElement => (
    <div className = 'sign_in_up_bg'>
        <div className = 'container'>
            <div className = 'row justify-content-lg-center justify-content-md-center'>
                <AuthHeaderElement />
                <div className = 'col-lg-6 col-md-8'>
                    <LoginFormElement />
                    <AuthFooterElement />
                </div>
            </div>
        </div>
    </div>
);
