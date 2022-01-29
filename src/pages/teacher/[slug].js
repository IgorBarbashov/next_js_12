import { AppView } from '../../views/app';
import { HeaderComponent } from '../../component/header';
import { TeacherComponent } from '../../component/teacher';
import { FooterComponent } from '../../component/footer';
import { CourseService } from '../../services';

const TeacherPage = () => (
    <AppView
        header = { <HeaderComponent /> }
        content = { <TeacherComponent /> }
        footer = { <FooterComponent /> }
    />
);

export const getServerSideProps = async ({ query: { slug } }) => {
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
    };
};

export default TeacherPage;
