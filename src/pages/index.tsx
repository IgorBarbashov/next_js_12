import { NextPage, GetServerSideProps } from 'next';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { HeaderComponent } from '~components/header';
import { FooterComponent } from '~components/footer';
import { CoursesComponent } from '~components/courses';
import { ProfileCardComponent } from '~components/profileCard';
import { CourseService } from '~services';

const Home: NextPage = () => {
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

export const getServerSideProps: GetServerSideProps = async () => {
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
