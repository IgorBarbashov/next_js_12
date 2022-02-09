import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const ApiErrorElement: FC = (): ReactElement => {
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <div className = 'container'>
            <div className = 'cmtk_dt'>
                <div className = 'crse14s center'><h2>{ t('common:apiError') }</h2></div>
                <div>
                    <div className = 'bk_btn' onClick = { router.reload }>{ t('common:reloadPage') }</div>
                </div>
            </div>

        </div>
    );
};
