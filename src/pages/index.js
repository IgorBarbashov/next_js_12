// Core
import Head from 'next/head';
import Link from 'next/link';

function Home() {
    return (
        <div>
            <Head>
                <title>Lectrum Next.js v12</title>
                <meta name = 'description' content = 'Lectrum Next.js course' />
                <link rel = 'icon' href = '/favicon.ico' />
            </Head>
            <main className = 'greeting'>
                <div>
                    <h1>Welcome to the Next.js Course!</h1>
                </div>
                <div className = 'nav-link'>
                    <Link href = '/profile'>Profile</Link>
                </div>
                <div className = 'nav-link'>
                    <Link href = '/about'>About</Link>
                </div>
            </main>
        </div>
    );
}

export default Home;
