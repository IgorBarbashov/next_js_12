import Link from 'next/link';

export function ProfileCardComponent() {
    return (
        <div className = 'fcrse_2 mb-30'>
            <div className = 'tutor_img'>
                <a href = '#'><img src = '/images/hd_dp.jpg' alt = '' /></a>
            </div>
            <div className = 'tutor_content_dt'>
                <div className = 'tutor150'>
                    <Link href={`/teacher/about`}>
                        <a className = 'prfle12link' >Joginder Singh</a>
                    </Link>
                    <div className = 'mef78' title = 'Verify'>
                        <i className = 'uil uil-check-circle' />
                    </div>
                </div>
                <div className = 'tutor_cate'>
                    Web Developer, Designer, and Teacher
                </div>

                <div className = 'tut1250'>
                    <span className = 'vdt15'>615K Students</span>
                    <span className = 'vdt15'>12 Courses</span>
                </div>
                <Link href={`/teacher/about`}>
                    <a className = 'prfle12link' >Go To Profile</a>
                </Link>
            </div>
        </div>
    );
}