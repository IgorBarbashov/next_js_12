// Elements
import { CourseCardElement } from '../../elements/courseCard';

export function CoursesComponent({
    courses,
}) {
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
