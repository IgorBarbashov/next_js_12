// Views
import { AppView } from '../views/app';
import { ContentView } from '../views/content';

// Component
import { HeaderComponent } from '../component/header';
import { FooterComponent } from '../component/footer';
import { CoursesComponent } from '../component/courses';
import { ProfileCardComponent } from '../component/profileCard';

export default function Home({
    courses,
}) {
    const contentJSX = (
        <ContentView
            content = { <CoursesComponent courses = { courses } /> }
            sider = { <ProfileCardComponent /> }
        />
    );

    return (
        <AppView
            header = { <HeaderComponent /> }
            content = { contentJSX }
            footer = { <FooterComponent /> }
        />
    );
}

export const getServerSideProps = () => {
    const courses = [{}, {}, {}, {}];

    return {
        props: {
            courses,
        },
    };
};
