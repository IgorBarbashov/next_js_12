import { FC, ReactElement } from 'react';
import Link from 'next/link';

export const RegisterFormElement: FC = (): ReactElement => (
    <div className = 'sign_form'>
        <h2>Welcome to Cursus</h2>
        <p>Sign Up and Start Learning!</p>
        <form>
            <div className = 'ui search focus'>
                <div className = 'ui left icon input swdh11 swdh19'>
                    <input
                        className = 'prompt srch_explore'
                        type = 'text'
                        name = 'fullname'
                        value = ''
                        id = 'id_fullname'
                        required
                        maxLength = { 64 }
                        placeholder = 'Full Name'
                    />
                </div>
            </div>
            <div className = 'ui search focus mt-15'>
                <div className = 'ui left icon input swdh11 swdh19'>
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
                <div className = 'ui left icon input swdh11 swdh19'>
                    <input
                        className = 'prompt srch_explore'
                        type = 'password'
                        name = 'password'
                        value = ''
                        required
                        maxLength = { 64 }
                        placeholder = 'Password'
                    />
                </div>
            </div>
            <div className = 'ui search focus mt-15'>
                <div className = 'ui left icon input swdh11 swdh19'>
                    <input
                        className = 'prompt srch_explore'
                        type = 'password'
                        name = 'password'
                        value = ''
                        required
                        maxLength = { 64 }
                        placeholder = 'Repeat password'
                    />
                </div>
            </div>
            <button className = 'login-btn' type = 'submit'>Sign Up</button>
        </form>
        <p className = 'mb-0 mt-30'>
            Already have an account?
            { ' ' }
            <Link href = '/login'>
                <a>Log In</a>
            </Link>
        </p>
    </div>
);
