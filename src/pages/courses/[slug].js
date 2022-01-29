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

export const getServerSideProps = async ({ query: { slug } }) => {
    const courseService = new CourseService();
    let course = null;

    try {
        const { data } = await courseService.getById(slug);
        course = data?.data ?? null;
    } catch (e) {
        process.stderr.write('API error');
    }

    return {
        props: {
            defaultData: {
                course,
            },
        },
    };
};

export default CoursePage;
