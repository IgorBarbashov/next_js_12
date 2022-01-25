// Other
import '../styles/libs/bootstrap.min.css';
import '../styles/libs/style.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return <Component { ...pageProps } />;
}

export default MyApp;
