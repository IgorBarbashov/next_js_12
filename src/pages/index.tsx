import { ReactElement } from 'react';
import {
    NextPage, GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext,
} from 'next';
import { AppView } from '~views/app';
import { ContentView } from '~views/content';
import { HeaderComponent } from '~components/header';
import { FooterComponent } from '~components/footer';
import { CoursesComponent } from '~components/courses';
import { ProfileCardComponent } from '~components/profileCard';
import { CourseService } from '~services';
import { useStore } from '~lib/context/contextProvider';
import { ICommonContextData, TCoursesContext } from '~types';
import { getAuthData } from '../utils/authUtils';

const Home: NextPage = (): ReactElement => {
    const { isLogged = false } = useStore() as ICommonContextData;

    const contentJSX = (
        <ContentView
            content = { <CoursesComponent /> }
            sider = { isLogged ? <ProfileCardComponent /> : null }
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

export const getServerSideProps: GetServerSideProps<TCoursesContext> =
    async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<TCoursesContext>> => {
        const authData = await getAuthData(ctx);
        console.log('authStatusObject:', authData);

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
