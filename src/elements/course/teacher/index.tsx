import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useStore } from '~lib/context/contextProvider';
import { ICourse, ICourseContextData } from '~types';

export const CourseTeacherElement: FC = (): ReactElement => {
    const { course } = useStore() as ICourseContextData;
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
                                            <a><img src = '/images/hd_dp.jpg' alt = '' /></a>
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
                                            <img src = '/images/like.svg' className = 'like-icon' alt = '' />
                                            <span>100</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className = 'lkcm152'>
                                            <img src = '/images/dislike.svg' className = 'like-icon' alt = '' />
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
