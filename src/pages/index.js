// Core
import Head from 'next/head';

const Home = () => (
    <div>
        <Head>
            <title>Lectrum Next.js v12</title>
            <meta name = 'description' content = 'Lectrum Next.js course' />
            <link rel = 'icon' href = '/favicon.ico' />
        </Head>
        <main className = 'greeting'>
            <h1>Welcome to the Next.js Course!</h1>
        </main>
    </div>
);

export default Home;
