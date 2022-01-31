import { ReactElement } from 'react';
import { NextPage, GetServerSideProps, GetServerSidePropsResult } from 'next';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { HeaderComponent } from '~components/header';
import { FooterComponent } from '~components/footer';
import { CoursesComponent } from '~components/courses';
import { ProfileCardComponent } from '~components/profileCard';
import { CourseService } from '~services';
import { TCoursesContext } from '~types';

const Home: NextPage = (): ReactElement => {
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

export const getServerSideProps: GetServerSideProps<TCoursesContext> = async (): Promise<GetServerSidePropsResult<TCoursesContext>> => {
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
            contextData: {
                courses,
            },
        },
    };
};

export default Home;
