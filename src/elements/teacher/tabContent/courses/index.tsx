import { CoursesComponent } from '~components/courses';
import { useStore } from '~lib/context/contextProvider';
import { ICoursesContextData } from '~types';

export const TeacherCoursesElement = () => {
    const { courses } = useStore() as ICoursesContextData;
    const coursesCount = courses?.length;

    return (
        <div
            className = 'tab-pane fade show active'
            id = 'nav-courses'
            role = 'tabpanel'
        >
            <div className = 'crse_content'>
                { coursesCount ? <h3>{ `My courses (${coursesCount})` }</h3> : null }
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
};
