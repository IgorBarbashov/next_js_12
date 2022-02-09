import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const AuthFooterElement: FC = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <div className = 'sign_footer'>
            { '© 2022 ' }
            <Link href = '/'>
                <a>
                    <strong>Lectrum LLC</strong>
                </a>
            </Link>
            { `. ${t('common:copyRight')}` }
        </div>
    );
};
