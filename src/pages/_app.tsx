import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ContextProvider } from '~lib/context/contextProvider';
import '~styles/libs/bootstrap.min.css';
import '~styles/libs/style.css';
import '~styles/globals.css';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
    <ContextProvider data = { pageProps.contextData }>
        <Component { ...pageProps } />
    </ContextProvider>
);

export default appWithTranslation(App);
