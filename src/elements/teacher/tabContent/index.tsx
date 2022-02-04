import { ReactElement } from 'react';
import { useStore } from '~lib/context/contextProvider';
import { ICommonContextData } from '~types';
import { TeacherAboutElement } from './about';
import { TeacherCoursesElement } from './courses';

interface ITabs {
    [key: string]: ReactElement;
}

export const TeacherTabContentElement = () => {
    const { slug = '' } = useStore() as ICommonContextData;

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
                                { tabs[slug] }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
