import { FC, ReactElement } from 'react';
import { QUERY_KEYS, useQueryData } from '~lib/reactQuery/queryClient';
import { CourseCardElement } from '~elements/courseCard';
import { ApiErrorElement } from '~elements/error/apiError';
import { ICourse, IGetCoursesProps } from '~types';

export const CoursesComponent: FC = (): ReactElement => {
    const courses = useQueryData<ICourse[], IGetCoursesProps>(QUERY_KEYS.GET_ALL_COURSES);

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
