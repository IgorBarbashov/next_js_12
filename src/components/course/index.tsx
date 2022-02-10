import { ApiErrorElement } from '~elements/error/apiError';
import { CourseHeaderElement } from '~elements/course/header';
import { CourseTeacherElement } from '~elements/course/teacher';
import { CourseInfoElement } from '~elements/course/info';
import { ICourse, IGetCourseProps } from '~types';
import { QUERY_KEYS, useQueryData } from '~lib/reactQuery/queryClient';
import { useRouter } from 'next/router';

export const CourseComponent = () => {
    const { query: { slug = '' } } = useRouter();
    const course = useQueryData<ICourse, IGetCourseProps>(
        [QUERY_KEYS.INCREASE_VIEWS_COUNT_AND_GET_COURSE, slug as string],
    );

    if (course === null) {
        return <ApiErrorElement />;
    }

    return (
        <div>
            <CourseHeaderElement />
            <CourseTeacherElement />
            <CourseInfoElement />
        </div>
    );
};
