// Core
import { useEffect } from 'react';
import { setCookie } from 'nookies';

function AboutPage({ title }) {
    useEffect(() => {

    }, []);

    return (
        <div>
            { title }
        </div>
    );
}

export const getServerSideProps = async (context) => {
    setCookie(context, 'auth', 'true');

    return {
        props: {
            title: 'AboutPage',
        },
    };
};

export default AboutPage;
