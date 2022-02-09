import { ReactElement } from 'react';
import {
    NextPage, GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext,
} from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig, useTranslation } from 'next-i18next';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { TeacherComponent } from '~components/teacher';
import { FooterComponent } from '~components/footer';
import { TeacherService } from '~services';
import { useStore } from '~lib/context/contextProvider';
import { getAuthData, getLocale, redirectObject } from '~utils';
import {
    TUserContext, IUserDynamicPathSegment, TCoursesContext, ICommonContextData,
} from '~types';

const TeacherPage: NextPage = (): ReactElement => {
    const { slug } = useStore() as ICommonContextData;
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>{ `${t('common:teacherPageTitle')} - ${slug}` }</title>
            </Head>
            <AppView
                header = { <HeaderComponent /> }
                content = { <TeacherComponent /> }
                footer = { <FooterComponent /> }
            />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<(TCoursesContext | TUserContext) & SSRConfig, IUserDynamicPathSegment> =
    async (
        ctx: GetServerSidePropsContext<IUserDynamicPathSegment>,
    ): Promise<GetServerSidePropsResult<(TCoursesContext | TUserContext
) & SSRConfig>> => {
        const { isLogged, profile } = await getAuthData(ctx);
        if (!isLogged) {
            return redirectObject({ destination: '/login' });
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
                ...await serverSideTranslations(getLocale(ctx), ['common']),
            },
        };
    };

export default TeacherPage;
