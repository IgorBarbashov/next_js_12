import { ContextProvider } from '~lib/context/contextProvider';
import '~styles/libs/bootstrap.min.css';
import '~styles/libs/style.css';
import '~styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
    <ContextProvider data = { pageProps.defaultData }>
        <Component { ...pageProps } />
    </ContextProvider>
);

export default MyApp;
