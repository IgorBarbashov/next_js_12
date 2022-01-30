import { AppView } from '../../views/app';
import { HeaderComponent } from '../../component/header';
import { CourseComponent } from '../../component/course';
import { FooterComponent } from '../../component/footer';
import { CourseService } from '../../services';

const CoursePage = () => (
    <AppView
        header = { <HeaderComponent /> }
        content = { <CourseComponent /> }
        footer = { <FooterComponent /> }
    />
);

export const getStaticPaths = async () => {
    const courseService = new CourseService();
    const { data } = await courseService.get(1, 100);
    const courses = data?.data || [];
    const paths = courses.filter((el) => el.hash !== '1').map(({ hash }) => ({ params: { slug: hash } }));
    return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params: { slug } }) => {
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
