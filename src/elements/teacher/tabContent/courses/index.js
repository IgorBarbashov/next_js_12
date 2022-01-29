// Components
import { CoursesComponent } from '../../../../component/courses';

// Other
import { useStore } from '../../../../lib/context/contextProvider';

export function TeacherCourses() {
    const { courses } = useStore();
    const coursesCount = courses.length;

    return (
        <div
            className = 'tab-pane fade show active'
            id = 'nav-courses'
            role = 'tabpanel'
        >
            <div className = 'crse_content'>
                <h3>{ `My courses (${coursesCount})` }</h3>
                <div className = '_14d25'>
                    <div className = 'row'>
                        <div className = 'col-12'>
                            <div className = 'section3125'>
                                <div className = 'la5lo1'>
                                    <div className = 'featured_courses'>
                                        <CoursesComponent />
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
