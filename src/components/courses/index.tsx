import { FC, ReactElement } from 'react';
import { CourseCardElement } from '~elements/courseCard';
import { ApiErrorElement } from '~elements/error/apiError';
import { ICourse } from '~types';

interface ICoursesComponentProps {
    courses: ICourse[] | null;
}

export const CoursesComponent: FC<ICoursesComponentProps> = ({ courses }): ReactElement => {
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
