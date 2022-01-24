// Elements
import { CourseElement } from '../../elements/course';

export function CoursesComponent({
    courses,
}) {
    const coursesJSX = courses.map((_, index) => {
        const key = `id-${index}`;
        return (
            <div className = 'item' key = { key }>
                <CourseElement />
            </div>
        );
    });

    return (
        <div className = 'featured_courses'>
            { coursesJSX }
        </div>
    );
}
