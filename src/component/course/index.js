import Link from 'next/link';
import { useStore } from '../../lib/context/contextProvider';

export function CourseComponent() {
    const { course } = useStore();

    const {
        badge, rating, poster, views, description, technologies, info,
    } = course;

    const {
        requirements, descriptions, benefits, descriptionSummary,
    } = info;

    const requirementsJsx = requirements.map((requirement, index) => (
        <li key = { `requirements-${index}` }>
            <span className = '_5f7g11'>
                { requirement }
            </span
            >
        </li>
    ));

    const descriptionsJsx = descriptions.map((description, index) => (
        <li key = { `descriptions-${index}` }>
            <span className = '_5f7g11'>
                { description }
            </span
            >
        </li>
    ));

    const benefitsJsx = benefits.map((benefit, index) => (
        <li key = { `benefitss-${index}` }>
            <span className = '_5f7g11'>
                <strong>{ benefit }</strong>
            </span
            >
        </li>
    ));

    return (
        <div>
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
                                            <span className = '_215b04'>
                                                { technologies }
                                            </span
                                            >
                                        </div>
                                        <div className = '_215b05'>
                                            <div className = 'crse_reviews mr-2'>
                                                <i className = 'uil uil-star' />
                                                { rating }
                                            </div>
                                            (81,665 ratings)
                                        </div>
                                        <div className = '_215b05'>{ `${views} students enrolled` }</div>
                                        <div className = '_215b06'>
                                            <div className = '_215b07'>
                                                <span><i className = 'uil uil-comment' /></span>
                                                English
                                            </div>
                                        </div>
                                        <div className = '_215b05'>Last updated 1/2020</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = '_215b15 _byt1458'>
                <div className = 'container-fluid'>
                    <div className = 'row'>
                        <div className = 'col-lg-12'>
                            <div className = 'user_dt5'>
                                <div className = 'user_dt_left'>
                                    <div className = 'live_user_dt'>
                                        <div className = 'user_img5'>
                                            <Link href = '/teacher/about'>
                                                <img src = '/images/hd_dp.jpg' alt = '' />
                                            </Link>
                                        </div>
                                        <div className = 'user_cntnt'>
                                            <p className = '_df7852'>
                                                <Link href = '/teacher/about'>
                                                    <a>Johnson Smith</a>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'user_dt_right'>
                                    <ul>
                                        <li>
                                            <p className = 'lkcm152'>
                                                <img
                                                    src = '/images/like.svg'
                                                    className = 'like-icon'
                                                    alt = ''
                                                />
                                                <span>100</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className = 'lkcm152'>
                                                <img
                                                    src = '/images/dislike.svg'
                                                    className = 'like-icon'
                                                    alt = ''
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
            <div className = '_215b17'>
                <div className = 'container-fluid'>
                    <div className = 'row'>
                        <div className = 'col-lg-12'>
                            <div className = 'course_tab_content'>
                                <div className = 'tab-content' id = 'nav-tabContent'>
                                    <div
                                        className = 'tab-pane fade show active'
                                        id = 'nav-about'
                                        role = 'tabpanel'
                                    >
                                        <div className = '_htg451'>
                                            <div className = '_htg452'>
                                                <h3>Requirements</h3>
                                                <ul className = '_abc124'>
                                                    { requirementsJsx }
                                                </ul>
                                            </div>
                                            <div className = '_htg452 mt-35'>
                                                <h3>Description</h3>
                                                <ul className = '_abc124'>
                                                    { descriptionsJsx }
                                                </ul>
                                                <p>{ descriptionSummary }</p>
                                                <p>
                                                    Throughout the course we cover tons of tools and
                                                    technologies including:
                                                </p>
                                                <ul className = '_abc124'>
                                                    { benefitsJsx }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
