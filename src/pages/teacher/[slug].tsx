import { ReactElement } from 'react';
import {
    NextPage, GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext,
} from 'next';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { TeacherComponent } from '~components/teacher';
import { FooterComponent } from '~components/footer';
import { TeacherService } from '~services';
import { getAuthData, redirectObject } from '~utils';
import { TUserContext, IUserDynamicPathSegment, TCoursesContext } from '~types';

const TeacherPage: NextPage = (): ReactElement => (
    <AppView
        header = { <HeaderComponent /> }
        content = { <TeacherComponent /> }
        footer = { <FooterComponent /> }
    />
);

export const getServerSideProps: GetServerSideProps<TCoursesContext | TUserContext, IUserDynamicPathSegment> =
    async (
        ctx: GetServerSidePropsContext<IUserDynamicPathSegment>,
    ): Promise<GetServerSidePropsResult<TCoursesContext | TUserContext>> => {
        const { isLogged, profile } = await getAuthData(ctx);
        if (!isLogged) {
            return redirectObject();
        }
        if (profile === null) {
            return {
                notFound: true,
            };
        }

        let courses = null;
        const teacherService = new TeacherService();
        try {
            const { data } = await teacherService.getCourses();
            courses = data?.data || null;
        } catch (e) {
            process.stderr.write('API error');
        }

        return {
            props: {
                contextData: {
                    isLogged,
                    slug: ctx.params?.slug ?? '',
                    profile,
                    courses,
                },
            },
        };
    };

export default TeacherPage;
