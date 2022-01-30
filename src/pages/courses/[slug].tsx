import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { CourseComponent } from '~components/course';
import { FooterComponent } from '~components/footer';
import { CourseService } from '~services';

const CoursePage: NextPage = () => (
    <AppView
        header = { <HeaderComponent /> }
        content = { <CourseComponent /> }
        footer = { <FooterComponent /> }
    />
);

export const getStaticPaths: GetStaticPaths = async () => {
    const courseService = new CourseService();
    const { data } = await courseService.get(1, 100);
    const courses = data?.data || [];
    const paths = courses.map(({ hash }) => ({ params: { slug: hash } }));
    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const courseService = new CourseService();
    let course = null;

    try {
        const { data } = await courseService.getById(slug);
        course = data?.data ?? null;
    } catch (e) {
        if (e.response.status === 404) {
            return {
                notFound: true,
            };
        }
        process.stderr.write('API error');
    }

    return {
        props: {
            defaultData: {
                course,
            },
        },
        revalidate: 15,
    };
};

export default CoursePage;
