import React, { FC, ReactElement } from 'react';
import Link from 'next/link';

export const UnLoggedMenuElement: FC = (): ReactElement => (
    <ul>
        <li className = 'ui dropdown'>
            <Link href = '/login'>
                <a
                    className = 'opts_account log_out _5f7g11'
                    title = 'Log in'
                >
                    Log in
                </a>
            </Link>
        </li>
    </ul>
);
