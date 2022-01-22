// Core
import Head from 'next/head';
import Link from 'next/link';

// Utils
import { serverSideCookies } from '../utils/cookieUtils';

// Constants
import { GREETING_MESSAGES } from '../constants/messages';

function Home({ isNewVisitor }) {
    const greetingMessage = isNewVisitor ? GREETING_MESSAGES.NEW_VISITOR : GREETING_MESSAGES.RETURNED_VISITOR;

    return (
        <div>
            <Head>
                <title>Lectrum Next.js v12</title>
                <meta name = 'description' content = 'Lectrum Next.js course' />
                <link rel = 'icon' href = '/favicon.ico' />
            </Head>
            <main className = 'greeting'>
                <div>
                    <h1>{ greetingMessage }</h1>
                </div>
                <div className = 'nav-link'>
                    <Link href = '/profile'>Profile page</Link>
                </div>
                <div className = 'nav-link'>
                    <Link href = '/about'>About page</Link>
                </div>
            </main>
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    const isNewVisitor = !serverSideCookies.isCookieSet(ctx, 'visitorId');

    if (isNewVisitor) {
        serverSideCookies.setCookie(ctx, 'visitorId', 1);
    }

    return {
        props: {
            isNewVisitor,
        },
    };
};

export default Home;
