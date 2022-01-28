import Link from 'next/link';
import { daysToNow, formatThousandsAndMillions } from '../../utils';

export function CourseCardElement({
    course,
}) {
    const {
        hash, poster, badge, rating, views, duration, technologies, description, price, created,
    } = course;

    return (
        <div className = 'fcrse_1 mb-20'>
            <Link href = { `/courses/${hash}` }>
                <a className = 'fcrse_img'>
                    <img src = { poster } alt = '' />
                    <div className = 'course-overlay'>
                        { badge ? <div className = 'badge_seller'>Bestseller</div> : null }
                        <div className = 'crse_reviews'>
                            <i className = 'uil uil-star' />
                            { rating }
                        </div>
                        <div className = 'crse_timer'>
                            { `${duration} hours` }
                        </div>
                    </div>
                </a>
            </Link>
            <div className = 'fcrse_content'>
                <div className = 'vdtodt'>
                    <span className = 'vdt14'>
                        { `${formatThousandsAndMillions(views)} views` }
                    </span>
                    <span className = 'vdt14'>{ `${daysToNow(created)} days ago` }</span>
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
                        By
                        <Link href = '/teacher/about'>
                            <a>John Doe</a>
                        </Link>
                    </p>
                    <div className = 'prce142'>{ `$${price}` }</div>
                </div>
            </div>
        </div>
    );
}
