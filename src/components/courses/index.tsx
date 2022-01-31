import { FC, ReactElement } from 'react';
import { CourseCardElement } from '~elements/courseCard';
import { ApiErrorElement } from '~elements/error/apiError';
import { useStore } from '~lib/context/contextProvider';
import { ICoursesContextData } from '~types';

export const CoursesComponent: FC = (): ReactElement => {
    const { courses } = useStore() as ICoursesContextData;

    if (courses === null) {
        return <ApiErrorElement />;
    }

    const coursesJSX = courses.map((course) => {
        const key = `id-${course.hash}`;
        return (
            <div className = 'item' key = { key }>
                <CourseCardElement course = { course } />
            </div>
        );
    });

    return (
        <div className = 'featured_courses'>
            { coursesJSX }
        </div>
    );
};
