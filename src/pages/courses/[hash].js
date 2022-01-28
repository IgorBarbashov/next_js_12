import { AppView } from '../../views/app';
import { HeaderComponent } from '../../component/header';
import { CourseComponent } from '../../component/course';
import { FooterComponent } from '../../component/footer';

export default function CoursePage() {
    return (
        <AppView
            header = { <HeaderComponent /> }
            content = { <CourseComponent /> }
            footer = { <FooterComponent /> }
        />
    );
}
