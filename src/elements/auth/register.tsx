import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { AuthService } from '~services';
import { registerFormSchema } from '~validation/schema';
import { IRegisterForm } from '~types';
import { useRouter } from 'next/router';
import { clientCookies } from '~utils';
import { COOKIES } from '~constants';

const authService = new AuthService();

export const RegisterFormElement: FC = (): ReactElement => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>({
        resolver: yupResolver(registerFormSchema),
    });

    const onSubmit = async ({ fullName, email, password }: IRegisterForm): Promise<void> => {
        try {
            const { data } = await authService.register(fullName, email, password);
            const jwtToken = data?.data ?? null;
            if (jwtToken !== null) {
                clientCookies.setCookie(COOKIES.JWT_TOKEN, jwtToken);
                await router.push('/');
            } else {
                clientCookies.deleteCookie(COOKIES.JWT_TOKEN);
            }
        } catch (e) {
            clientCookies.deleteCookie(COOKIES.JWT_TOKEN);
        }
    };

    return (
        <div className = 'sign_form'>
            <h2>Welcome to Cursus</h2>
            <p>Sign Up and Start Learning!</p>
            <form>
                <div className = 'ui search focus'>
                    <div className = 'ui left icon input swdh11 swdh19'>
                        <input
                            { ...register('fullName') }
                            className = { classNames('prompt srch_explore', { error: errors.fullName }) }
                            placeholder = 'Full Name'
                        />
                    </div>
                </div>
                <div className = 'ui search focus mt-15'>
                    <div className = 'ui left icon input swdh11 swdh19'>
                        <input
                            { ...register('email') }
                            className = { classNames('prompt srch_explore', { error: errors.email }) }
                            type = 'email'
                            placeholder = 'Email Address'
                        />
                    </div>
                </div>
                <div className = 'ui search focus mt-15'>
                    <div className = 'ui left icon input swdh11 swdh19'>
                        <input
                            { ...register('password') }
                            className = { classNames('prompt srch_explore', { error: errors.password }) }
                            type = 'password'
                            placeholder = 'Password'
                        />
                    </div>
                </div>
                <div className = 'ui search focus mt-15'>
                    <div className = 'ui left icon input swdh11 swdh19'>
                        <input
                            { ...register('repeatPassword') }
                            className = { classNames('prompt srch_explore', { error: errors.repeatPassword }) }
                            type = 'password'
                            placeholder = 'Repeat password'
                        />
                    </div>
                </div>
                <button
                    className = 'login-btn'
                    type = 'button'
                    onClick = { handleSubmit(onSubmit) }
                >
                    Sign Up
                </button>
            </form>
            <p className = 'mb-0 mt-30 hvsng145'>
                Already have an account?
                { ' ' }
                <Link href = '/login'>
                    <a>Log In</a>
                </Link>
            </p>
        </div>
    );
};
