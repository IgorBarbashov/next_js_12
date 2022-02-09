import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useStore } from '~lib/context/contextProvider';
import { IUserContextData } from '~types';
import { ApiErrorElement } from '~elements/error/apiError';

export const ProfileCardComponent: FC = (): ReactElement => {
    const { profile } = useStore() as IUserContextData;
    const { t } = useTranslation();

    if (profile === null) {
        return <ApiErrorElement />;
    }

    const { name, avatar } = profile;

    return (
        <div className = 'fcrse_2 mb-30'>
            <div className = 'tutor_img'>
                <Link href = '/teacher/about'>
                    <a href = '#'>
                        <Image
                            src = { avatar }
                            alt = ''
                            width = { 100 }
                            height = { 100 }
                        />
                    </a>
                </Link>
            </div>
            <div className = 'tutor_content_dt'>
                <div className = 'tutor150'>
                    <Link href = '/teacher/about'>
                        <a className = 'prfle12link'>{ name }</a>
                    </Link>
                    <div className = 'mef78' title = 'Verify'>
                        <i className = 'uil uil-check-circle' />
                    </div>
                </div>
                <div className = 'tutor_cate'>
                    { t('profileDefaultProfession') }
                </div>
                <div className = 'tut1250'>
                    <span className = 'vdt15'>{ `615K ${t('common:profileStudentsCount')}` }</span>
                    <span className = 'vdt15'>{ `12 ${t('common:profileCoursesCount')}` }</span>
                </div>
                <Link href = '/teacher/about'>
                    <a className = 'prfle12link'>{ t('common:profileGotoDetailsButton') }</a>
                </Link>
            </div>
        </div>
    );
};
