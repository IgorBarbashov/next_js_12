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

const Home = () => {
    const contentJSX = (
        <ContentView
            content = { <CoursesComponent /> }
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
};

export const getServerSideProps = async () => {
    const courseService = new CourseService();
    let courses = null;

    try {
        const { data } = await courseService.get();
        courses = data?.data || null;
    } catch (e) {
        process.stderr.write('API error');
    }

    return {
        props: {
            defaultData: {
                courses,
            },
        },
    };
};

export default Home;
