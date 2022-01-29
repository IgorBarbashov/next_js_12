// Other
import '../styles/libs/bootstrap.min.css';
import '../styles/libs/style.css';
import '../styles/globals.css';
import { ContextProvider } from '../lib/context/contextProvider';

const MyApp = ({ Component, pageProps }) => (
    <ContextProvider data = { pageProps.defaultData }>
        <Component { ...pageProps } />
    </ContextProvider>
);

export default MyApp;
