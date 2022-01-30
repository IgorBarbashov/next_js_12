import { useStore } from '../../lib/context/contextProvider';
import { ApiErrorElement } from '../../elements/error/apiError';
import { CourseHeaderElement } from '../../elements/course/header';
import { CourseTeacherElement } from '../../elements/course/teacher';
import { CourseInfoElement } from '../../elements/course/info';

export const CourseComponent = () => {
    const { course } = useStore();

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
