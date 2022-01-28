import { CourseCardElement } from '../../../courseCard';

export function TeacherCourses({
    courses,
}) {
    const coursesJSX = courses.map((_, index) => {
        const key = `id-${index}`;
        return (
            <div className = 'item' key = { key }>
                <CourseCardElement />
            </div>
        );
    });

    return (
        <div
            className = 'tab-pane fade show active'
            id = 'nav-courses'
            role = 'tabpanel'
        >
            <div className = 'crse_content'>
                <h3>My courses (8)</h3>
                <div className = '_14d25'>
                    <div className = 'row'>
                        <div className = 'col-12'>
                            <div className = 'section3125'>
                                <div className = 'la5lo1'>
                                    <div className = 'featured_courses'>
                                        { coursesJSX }
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
