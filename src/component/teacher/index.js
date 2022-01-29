import { TeacherHeader } from '../../elements/teacher/header';
import { TeacherTabContent } from '../../elements/teacher/tabContent';
import { TeacherTabs } from '../../elements/teacher/tabs';

export function TeacherComponent() {
    return (
        <>
            <TeacherHeader />
            <TeacherTabs />
            <TeacherTabContent />
        </>
    );
}
