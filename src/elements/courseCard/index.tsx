import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { monthsToNow, formatThousandsAndMillions } from '~utils';
import { ICourse } from '~types';

interface ICourseCardElementProps {
    course: ICourse;
}

export const CourseCardElement: FC<ICourseCardElementProps> = ({
    course,
}): ReactElement => {
    const { t } = useTranslation();
    const {
        hash, poster, badge, rating, views, duration, technologies, description, price, created,
    } = course;

    return (
        <div className = 'fcrse_1 mb-20'>
            <Link href = { `/courses/${hash}` }>
                <a className = 'fcrse_img'>
                    <Image
                        src = { poster }
                        layout = 'responsive'
                        width = { 480 }
                        height = { 270 }
                        alt = ''
                    />
                    <div className = 'course-overlay'>
                        { badge ? <div className = 'badge_seller'>{ t('common:bestseller') }</div> : null }
                        <div className = 'crse_reviews'>
                            <i className = 'uil uil-star' />
                            { rating }
                        </div>
                        <div className = 'crse_timer'>
                            { `${duration} ${t('common:hours')}` }
                        </div>
                    </div>
                </a>
            </Link>
            <div className = 'fcrse_content'>
                <div className = 'vdtodt'>
                    <span className = 'vdt14'>
                        { `${formatThousandsAndMillions(views)} ${t('common:views')}` }
                    </span>
                    <span className = 'vdt14'>{ `${monthsToNow(created)} ${t('common:ago')}` }</span>
                </div>
                <Link href = { `/courses/${hash}` }>
                    <a className = 'crse14s'>
                        { description }
                    </a>
                </Link>
                <Link href = { `/courses/${hash}` }>
                    <a className = 'crse-cate'>
                        { technologies }
                    </a>
                </Link>
                <div className = 'auth1lnkprce'>
                    <p className = 'cr1fot'>
                        { `${t('common:by')} ` }
                        <Link href = '/teacher/about'>
                            <a>John Doe</a>
                        </Link>
                    </p>
                    <div className = 'prce142'>{ `$${price}` }</div>
                </div>
            </div>
        </div>
    );
};
