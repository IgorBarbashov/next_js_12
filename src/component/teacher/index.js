import { TeacherHeader } from '../../elements/teacher/header';
import { TeacherTabContent } from '../../elements/teacher/tabContent';
import { TeacherTabs } from '../../elements/teacher/tabs';

export function TeacherComponent({
    avatarSrc,
    name,
    professional,
    courses,
    slug,
}) {
    return (
        <>
            <TeacherHeader { ...{ avatarSrc, name, professional } } />
            <TeacherTabs slug = { slug } />
            <TeacherTabContent { ...{ courses, slug } } />
        </>
    );
}
