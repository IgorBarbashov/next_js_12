import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { ContextProvider } from '~lib/context/contextProvider';
import '~styles/libs/bootstrap.min.css';
import '~styles/libs/style.css';
import '~styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => (
    <ContextProvider data = { pageProps.contextData }>
        <Component { ...pageProps } />
    </ContextProvider>
);

export default MyApp;
