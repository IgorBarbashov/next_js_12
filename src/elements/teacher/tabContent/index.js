import { TeacherAbout } from './about';
import { TeacherCourses } from './courses';
import { useStore } from '../../../lib/context/contextProvider';

export function TeacherTabContent() {
    const { courses, slug } = useStore();

    const tabs = {
        about: <TeacherAbout />,
        courses: <TeacherCourses courses = { courses } />,
    };

    return (
        <div className = '_215b17'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = 'col-lg-12'>
                        <div className = 'course_tab_content'>
                            <div className = 'tab-content' id = 'nav-tabContent'>
                                { tabs[slug] }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
