import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { AppView } from '~views/app';
import { HeaderComponent } from '~components/header';
import { TeacherComponent } from '~components/teacher';
import { FooterComponent } from '~components/footer';
import { CourseService } from '~services';
import { TEACHER_PAGE } from '~constants';

const TeacherPage: NextPage = () => (
    <AppView
        header = { <HeaderComponent /> }
        content = { <TeacherComponent /> }
        footer = { <FooterComponent /> }
    />
);

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = TEACHER_PAGE.VALID_SLUGS.map((slug) => ({ params: { slug } }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
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
