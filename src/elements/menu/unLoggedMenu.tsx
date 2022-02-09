import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const UnLoggedMenuElement: FC = (): ReactElement => {
    const { t } = useTranslation();
    return (
        <ul>
            <li className = 'ui dropdown'>
                <Link href = '/login'>
                    <a
                        className = 'opts_account log_out _5f7g11'
                        title = 'Log in'
                    >
                        { t('common:logIn') }

                    </a>
                </Link>
            </li>
        </ul>
    );
};
