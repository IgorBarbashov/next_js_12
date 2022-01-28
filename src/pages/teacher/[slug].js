import { AppView } from '../../views/app';
import { HeaderComponent } from '../../component/header';
import { TeacherComponent } from '../../component/teacher';
import { FooterComponent } from '../../component/footer';

export default function TeacherPage({
    avatarSrc,
    name,
    professional,
    courses,
    slug,
}) {
    return (
        <AppView
            header = { <HeaderComponent /> }
            content = { (
                <TeacherComponent { ...{
                    avatarSrc, name, professional, courses, slug,
                } }
                />
            ) }
            footer = { <FooterComponent /> }
        />
    );
}

export const getServerSideProps = ({ query: { slug } }) => {
    const avatarSrc = '/images/hd_dp.jpg';
    const name = 'Joginder Singh';
    const professional = 'UI / UX Designer and Web Developer';
    const courses = [{}, {}, {}, {}];

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
