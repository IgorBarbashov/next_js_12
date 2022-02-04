import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { AuthService } from '~services';
import { clientCookies } from '~utils';
import { loginFormSchema } from '~validation/schema';
import { ILoginForm } from '~types';
import { COOKIES } from '~constants';

const authService = new AuthService();

export const LoginFormElement: FC = (): ReactElement => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
        resolver: yupResolver(loginFormSchema),
    });

    const onSubmit = async ({ email, password }: ILoginForm) => {
        try {
            const { data } = await authService.login(email, password);
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
            <h2>Welcome Back</h2>
            <p>Log In to Your Edututs+ Account!</p>
            <form>
                <div className = 'ui search focus mt-15'>
                    <div className = 'ui left icon input swdh95'>
                        <input
                            { ...register('email') }
                            className = { classNames('prompt srch_explore', { error: errors.email }) }
                            type = 'email'
                            placeholder = 'Email Address'
                        />
                    </div>
                </div>
                <div className = 'ui search focus mt-15'>
                    <div className = 'ui left icon input swdh95'>
                        <input
                            { ...register('password') }
                            className = { classNames('prompt srch_explore', { error: errors.password }) }
                            type = 'password'
                            placeholder = 'Password'
                        />
                    </div>
                </div>
                <div className = 'ui form mt-30 checkbox_sign'>
                    <div className = 'inline field'>
                        <div className = 'ui checkbox mncheck'>
                            <input
                                { ...register('remember') }
                                id = 'remember'
                                className = 'hidden'
                                type = 'checkbox'
                            />
                            <label htmlFor = 'remember'>Remember Me</label>
                        </div>
                    </div>
                </div>
                <button
                    className = 'login-btn'
                    type = 'button'
                    onClick = { handleSubmit(onSubmit) }
                >
                    Sign In
                </button>
            </form>
            <p className = 'mb-0 mt-30 hvsng145'>
                Don&apos;t have an account?
                { ' ' }
                <Link href = '/register'>
                    <a>Sign Up</a>
                </Link>
            </p>
        </div>
    );
};
