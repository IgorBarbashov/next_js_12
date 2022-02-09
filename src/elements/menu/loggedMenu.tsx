import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useStore } from '~lib/context/contextProvider';
import { clientCookies } from '~utils';
import { COOKIES } from '~constants';
import { IUserContextData } from '~types';
import { ApiErrorElement } from '~elements/error/apiError';

export const LoggedMenuElement: FC = (): ReactElement => {
    const router = useRouter();
    const { t } = useTranslation();

    const { profile } = useStore() as IUserContextData;

    if (profile === null) {
        return <ApiErrorElement />;
    }

    const { name, avatar } = profile;

    const handler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        clientCookies.deleteCookie(COOKIES.JWT_TOKEN);
        router.reload();
    };

    return (
        <ul>
            <li>
                <Link href = '#'>
                    <a className = 'upload_btn' title = 'Create New Course'>
                        { t('common:createNewCourse') }
                    </a>
                </Link>
            </li>
            <li className = 'ui dropdown'>
                <Link href = '/teacher/about'>
                    <a className = 'opts_account _df7852' title = 'Account'>
                        { name }
                        <Image
                            src = { avatar }
                            alt = ''
                            layout = 'fixed'
                            width = { 36 }
                            height = { 36 }
                        />
                    </a>
                </Link>
            </li>
            <li className = 'ui dropdown'>
                <Link href = '#'>
                    <a
                        className = 'opts_account log_out _5f7g11'
                        onClick = { handler }
                    >
                        { t('common:logOut') }
                    </a>
                </Link>
            </li>
        </ul>
    );
};
