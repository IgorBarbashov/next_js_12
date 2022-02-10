import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { TeacherAboutElement } from './about';
import { TeacherCoursesElement } from './courses';

interface ITabs {
    [key: string]: ReactElement;
}

export const TeacherTabContentElement = () => {
    const { query: { slug = '' } } = useRouter();

    const tabs: ITabs = {
        about: <TeacherAboutElement />,
        courses: <TeacherCoursesElement />,
    };

    return (
        <div className = '_215b17'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = 'col-lg-12'>
                        <div className = 'course_tab_content'>
                            <div className = 'tab-content' id = 'nav-tabContent'>
                                { tabs[slug as string] }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
