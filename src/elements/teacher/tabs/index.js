import Link from 'next/link';

export function TeacherTabs({
    slug,
}) {
    return (
        <div className = '_215b15'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = 'col-lg-12'>
                        <div className = 'course_tabs'>
                            <nav>
                                <div
                                    className = 'nav nav-tabs tab_crse'
                                    id = 'nav-tab'
                                    role = 'tablist'
                                >
                                    <Link href = '/teacher/about'>
                                        <a
                                            className = { `nav-item nav-link${slug === 'about' ? ' active' : ''}` }
                                            id = 'nav-about-tab'
                                            data-toggle = 'tab'
                                            role = 'tab'
                                            aria-selected = 'true'
                                        >
                                            About
                                        </a
                                        >
                                    </Link>
                                    <Link href = '/teacher/courses'>
                                        <a
                                            className = { `nav-item nav-link${slug === 'courses' ? ' active' : ''}` }
                                            id = 'nav-courses-tab'
                                            data-toggle = 'tab'
                                            role = 'tab'
                                            aria-selected = 'false'
                                        >
                                            My courses
                                        </a
                                        >
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
