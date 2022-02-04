import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { clientCookies } from '~utils';
import { COOKIES } from '~constants';

export const LoggedMenuElement: FC = (): ReactElement => {
    const router = useRouter();

    const handler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        clientCookies.deleteCookie(COOKIES.JWT_TOKEN);
        router.reload();
    };

    return (
        <ul>
            <li>
                <a
                    href = '#'
                    className = 'upload_btn'
                    title = 'Create New Course'
                >
                    Create New Course
                </a
                >
            </li>
            <li className = 'ui dropdown'>
                <a href = '#' className = 'opts_account _df7852' title = 'Account'>
                    John Dou
                    <Image
                        src = '/images/hd_dp.jpg'
                        alt = ''
                        layout = 'fixed'
                        width = { 36 }
                        height = { 36 }
                    />
                </a>
            </li>
            <li className = 'ui dropdown'>
                <Link href = '#'>
                    <a
                        className = 'opts_account log_out _5f7g11'
                        title = 'Log out'
                        onClick = { handler }
                    >
                        Log out
                    </a>
                </Link>
            </li>
        </ul>
    );
};
