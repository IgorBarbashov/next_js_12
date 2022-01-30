import { AppView } from '../../views/app';
import { HeaderComponent } from '../../component/header';
import { TeacherComponent } from '../../component/teacher';
import { FooterComponent } from '../../component/footer';
import { CourseService } from '../../services';
import { TEACHER } from '../../constants/pages';

const TeacherPage = () => (
    <AppView
        header = { <HeaderComponent /> }
        content = { <TeacherComponent /> }
        footer = { <FooterComponent /> }
    />
);

export const getStaticPaths = async () => {
    const paths = TEACHER.VALID_SLUGS.map((slug) => ({ params: { slug } }));
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const avatarSrc = '/images/hd_dp.jpg';
    const name = 'Joginder Singh';
    const professional = 'UI / UX Designer and Web Developer';
    let courses = null;

    const courseService = new CourseService();
    try {
        const { data } = await courseService.get();
        courses = data?.data || null;
    } catch (e) {
        process.stderr.write('API error');
    }

    return {
        props: {
            defaultData: {
                avatarSrc,
                name,
                professional,
                courses,
                slug,
            },
        },
        revalidate: 15,
    };
};

export default TeacherPage;
