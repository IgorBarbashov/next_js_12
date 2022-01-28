// Elements
import { CourseCardElement } from '../../elements/courseCard';

// Other
import { useStore } from '../../lib/context/contextProvider';

export function CoursesComponent() {
    const { courses } = useStore();

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
}
