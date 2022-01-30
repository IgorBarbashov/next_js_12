import Link from 'next/link';
import { useStore } from '~lib/context/contextProvider';
import { formatDate } from '~utils';

export const CourseHeaderElement = () => {
    const {
        course: {
            badge, rating, poster, views, description, technologies, votes, created,
        },
    } = useStore();

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
                                                className = 'fcrse_img'
                                                data-toggle = 'modal'
                                                data-target = '#videoModal'
                                            >
                                                <img src = { poster } alt = '' />
                                                <div className = 'course-overlay'>
                                                    { badge ? <div className = 'badge_seller'>Bestseller</div> : null }
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
                                        { `(${votes} ratings)` }
                                    </div>
                                    <div className = '_215b05'>{ `${views.toLocaleString()} students enrolled` }</div>
                                    <div className = '_215b06'>
                                        <div className = '_215b07'>
                                            <span><i className = 'uil uil-comment' /></span>
                                            English
                                        </div>
                                    </div>
                                    <div className = '_215b05'>
                                        { `Last updated ${formatDate(created, 'M/YYYY')}` }
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
