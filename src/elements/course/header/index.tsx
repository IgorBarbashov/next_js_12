import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { QUERY_KEYS, useQueryData } from '~lib/reactQuery/queryClient';
import { formatDate } from '~utils';
import { ICourse, IGetCourseProps } from '~types';

export const CourseHeaderElement: FC = (): ReactElement => {
    const { query: { slug = '' } } = useRouter();
    const course = useQueryData<ICourse, IGetCourseProps>(
        [QUERY_KEYS.INCREASE_VIEWS_COUNT_AND_GET_COURSE, slug as string],
        { id: slug as string },
    );
    const { t } = useTranslation();

    const {
        badge, rating, poster, views, description, technologies, votes, created,
    } = course as ICourse;

    return (
        <div className = '_215b01'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = 'col-lg-12'>
                        <div className = 'section3125'>
                            <div className = 'row justify-content-center'>
                                <div className = 'col-xl-4 col-lg-5 col-md-6'>
                                    <div className = 'preview_video'>
                                        <Link href = '#'>
                                            <a
                                                href = '#'
                                                className = 'fcrse_img'
                                                data-toggle = 'modal'
                                                data-target = '#videoModal'
                                            >
                                                <Image
                                                    src = { poster }
                                                    alt = ''
                                                    layout = 'responsive'
                                                    width = { 480 }
                                                    height = { 270 }
                                                />
                                                <div className = 'course-overlay'>
                                                    { badge
                                                        ? <div className = 'badge_seller'>{ t('common:bestseller') }</div>
                                                        : null }
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className = 'col-xl-8 col-lg-7 col-md-6'>
                                    <div className = '_215b03'>
                                        <h2>{ description }</h2>
                                        <span className = '_215b04'>{ technologies }</span>
                                    </div>
                                    <div className = '_215b05'>
                                        <div className = 'crse_reviews mr-2'>
                                            <i className = 'uil uil-star' />
                                            { rating }
                                        </div>
                                        { `(${votes} ${t('common:ratings')})` }
                                    </div>
                                    <div className = '_215b05'>{ `${views.toLocaleString()} ${t('common:studentsEnrolled')}` }</div>
                                    <div className = '_215b06'>
                                        <div className = '_215b07'>
                                            <span><i className = 'uil uil-comment' /></span>
                                            { t('common:english') }
                                        </div>
                                    </div>
                                    <div className = '_215b05'>
                                        { `${t('common:lastUpdated')} ${formatDate(created, 'M/YYYY')}` }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
