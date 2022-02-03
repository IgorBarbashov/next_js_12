import { FC, ReactElement } from 'react';
import Link from 'next/link';

export const AuthHeaderElement: FC = (): ReactElement => (
    <div className = 'col-lg-12'>
        <div className = 'main_logo25' id = 'logo'>
            <Link href = '/'>
                <a>
                    <img
                        src = 'images/logo.svg'
                        alt = ''
                    />
                </a>
            </Link>
            <Link href = '/'>
                <a>
                    <img
                        className = 'logo-inverse'
                        src = 'images/ct_logo.svg'
                        alt = ''
                    />
                </a>
            </Link>
        </div>
    </div>
);
