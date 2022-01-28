import { AppView } from '../../views/app';
import { HeaderComponent } from '../../component/header';
import { TeacherComponent } from '../../component/teacher';
import { FooterComponent } from '../../component/footer';

export default function TeacherPage() {
    return (
        <AppView
            header = { <HeaderComponent /> }
            content = { <TeacherComponent /> }
            footer = { <FooterComponent /> }
        />
    );
}

export const getServerSideProps = ({ query: { slug } }) => {
    const avatarSrc = '/images/hd_dp.jpg';
    const name = 'Joginder Singh';
    const professional = 'UI / UX Designer and Web Developer';
    const courses = [{}, {}, {}, {}]; // TODO

    return {
        props: {
            avatarSrc,
            name,
            professional,
            courses,
            slug,
        },
    };
};
