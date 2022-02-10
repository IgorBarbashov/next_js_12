import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { QUERY_KEYS, useQueryData } from '~lib/reactQuery/queryClient';
import { ICourse, IGetCourseProps } from '~types';

export const CourseTeacherElement: FC = (): ReactElement => {
    const { query: { slug = '' } } = useRouter();
    const course = useQueryData<ICourse, IGetCourseProps>(
        [QUERY_KEYS.INCREASE_VIEWS_COUNT_AND_GET_COURSE, slug as string],
        { id: slug as string },
    );
    const { createdBy } = course as ICourse;

    return (
        <div className = '_215b15 _byt1458'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = 'col-lg-12'>
                        <div className = 'user_dt5'>
                            <div className = 'user_dt_left'>
                                <div className = 'live_user_dt'>
                                    <div className = 'user_img5'>
                                        <Link href = '/teacher/about'>
                                            <a>
                                                <Image
                                                    src = '/images/hd_dp.jpg'
                                                    alt = ''
                                                    layout = 'fixed'
                                                    width = { 50 }
                                                    height = { 50 }
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className = 'user_cntnt'>
                                        <p className = '_df7852'>
                                            <Link href = '/teacher/about'>
                                                <a>{ createdBy }</a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className = 'user_dt_right'>
                                <ul>
                                    <li>
                                        <p className = 'lkcm152'>
                                            <Image
                                                src = '/images/like.svg'
                                                className = 'like-icon'
                                                alt = ''
                                                layout = 'fixed'
                                                width = { 24 }
                                                height = { 24 }
                                            />
                                            <span>100</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className = 'lkcm152'>
                                            <Image
                                                src = '/images/dislike.svg'
                                                className = 'like-icon'
                                                alt = ''
                                                layout = 'fixed'
                                                width = { 24 }
                                                height = { 24 }
                                            />
                                            <span>20</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
