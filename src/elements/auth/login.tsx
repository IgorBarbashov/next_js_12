import { FC, ReactElement } from 'react';
import Link from 'next/link';

export const LoginFormElement: FC = (): ReactElement => (
    <div className = 'sign_form'>
        <h2>Welcome Back</h2>
        <p>Log In to Your Edututs+ Account!</p>
        <form>
            <div className = 'ui search focus mt-15'>
                <div className = 'ui left icon input swdh95'>
                    <input
                        className = 'prompt srch_explore'
                        type = 'email'
                        name = 'emailaddress'
                        value = ''
                        id = 'id_email'
                        required
                        maxLength = { 64 }
                        placeholder = 'Email Address'
                    />
                </div>
            </div>
            <div className = 'ui search focus mt-15'>
                <div className = 'ui left icon input swdh95'>
                    <input
                        className = 'prompt srch_explore'
                        type = 'password'
                        name = 'password'
                        value = ''
                        id = 'id_password'
                        required
                        maxLength = { 64 }
                        placeholder = 'Password'
                    />
                </div>
            </div>
            <div className = 'ui form mt-30 checkbox_sign'>
                <div className = 'inline field'>
                    <div className = 'ui checkbox mncheck'>
                        <input
                            type = 'checkbox'
                            tabIndex = { 0 }
                            className = 'hidden'
                            id = 'remember'
                        />
                        <label htmlFor = 'remember'>Remember Me</label>
                    </div>
                </div>
            </div>
            <button className = 'login-btn' type = 'submit'>Sign In</button>
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
