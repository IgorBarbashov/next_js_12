// Elements
import { CourseCardElement } from '../../elements/courseCard';

// Other
import { useStore } from '../../lib/context/contextProvider';

export function CoursesComponent() {
    const { courses } = useStore();

    const coursesJSX = courses.map((_, index) => {
        const key = `id-${index}`;
        return (
            <div className = 'item' key = { key }>
                <CourseCardElement />
            </div>
        );
    });

    return (
        <div className = 'featured_courses'>
            { coursesJSX }
        </div>
    );
}
