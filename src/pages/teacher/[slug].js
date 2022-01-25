import { AppView } from '../../views/app';
import { HeaderComponent } from '../../component/header';
import { TeacherView } from '../../views/teacher';
import { FooterComponent } from '../../component/footer';
import { TeacherHeader } from '../../elements/teacher/header';
import { TeacherTabs } from '../../elements/teacher/tabs';
import { TeacherTabContent } from '../../elements/teacher/tabContent';

export default function TeacherPage({
    avatarSrc,
    name,
    professional,
    courses,
    slug,
}) {
    const contentJSX = (
        <TeacherView
            header = { <TeacherHeader { ...{ avatarSrc, name, professional } } /> }
            tabs = { <TeacherTabs slug = { slug } /> }
            content = { <TeacherTabContent { ...{ courses, slug } } /> }
        />
    );

    return (
        <AppView
            header = { <HeaderComponent /> }
            content = { contentJSX }
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
