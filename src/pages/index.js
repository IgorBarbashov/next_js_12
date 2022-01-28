// Views
import { AppView } from '../views/app';
import { ContentView } from '../views/content';

// Component
import { HeaderComponent } from '../component/header';
import { FooterComponent } from '../component/footer';
import { CoursesComponent } from '../component/courses';
import { ProfileCardComponent } from '../component/profileCard';

// Other
import { CourseService } from '../services';
import { ApiErrorElement } from '../elements/error/apiError';
import { useStore } from '../lib/context/contextProvider';

export default function Home() {
    const courses = useStore();

    const ContentViewContent = courses === null
        ? <ApiErrorElement />
        : <CoursesComponent />;

    const contentJSX = (
        <ContentView
            content = { ContentViewContent }
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

export const getServerSideProps = async () => {
    const courseService = new CourseService();
    let courses = null;

    try {
        const { data } = await courseService.get();
        courses = data?.data || null;
    } catch (e) {
        console.error('API error');
    }

    return {
        props: {
            defaultData: {
                courses,
            },
        },
    };
};
