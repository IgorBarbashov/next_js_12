// Elements
import { CourseCardElement } from '../../elements/courseCard';

// Other
import { useStore } from '../../lib/context/contextProvider';
import { ApiErrorElement } from '../../elements/error/apiError';

export const CoursesComponent = () => {
    const { courses } = useStore();

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
