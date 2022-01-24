export function CourseElement() {
    return (
        <div className = 'fcrse_1 mb-20'>
            <a href = 'course_detail_view.html' className = 'fcrse_img'>
                <img src = '/images/courses/img-1.jpg' alt = '' />
                <div className = 'course-overlay'>
                    <div className = 'badge_seller'>Bestseller</div>
                    <div className = 'crse_reviews'>
                        <i className = 'uil uil-star' />
                        4.5
                    </div>
                    <div className = 'crse_timer'>25 hours</div>
                </div>
            </a>
            <div className = 'fcrse_content'>
                <div className = 'vdtodt'>
                    <span className = 'vdt14'>109k views</span>
                    <span className = 'vdt14'>15 days ago</span>
                </div>
                <a
                    href = 'course_detail_view.html'
                    className = 'crse14s'
                >
                    Complete Python Bootcamp: Go from zero to hero in
                    Python 3
                </a
                >
                <a
                    href = '#'
                    className = 'crse-cate'
                >
                    Web Development | Python
                </a
                >
                <div className = 'auth1lnkprce'>
                    <p className = 'cr1fot'>
                        By
                        <a href = '#'>John Doe</a>
                    </p>
                    <div className = 'prce142'>$10</div>
                </div>
            </div>
        </div>
    );
}
