import { ReactElement } from 'react';
import {
    NextPage, GetServerSideProps, GetServerSidePropsResult,
} from 'next';
import axios, { AxiosError } from 'axios';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { CourseComponent } from '~components/course';
import { FooterComponent } from '~components/footer';
import { CourseService } from '~services';
import { TCourseContext, ICoursesDynamicPathSegment } from '~types';

const CoursePage: NextPage = (): ReactElement => (
    <AppView
        header = { <HeaderComponent /> }
        content = { <CourseComponent /> }
        footer = { <FooterComponent /> }
    />
);

export const getServerSideProps: GetServerSideProps<TCourseContext, ICoursesDynamicPathSegment> = async ({
    params,
}): Promise<GetServerSidePropsResult<TCourseContext>> => {
    const courseService = new CourseService();
    let course = null;

    try {
        const { data } = await courseService.increaseViewsCount(params?.slug ?? '');
        course = data?.data ?? null;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            const axiosError = e as AxiosError;
            if (axiosError.response?.status === 404) {
                return {
                    notFound: true,
                };
            }
        }
        process.stderr.write('API error');
    }

    return {
        props: {
            contextData: {
                course,
            },
        },
    };
};

export default CoursePage;
