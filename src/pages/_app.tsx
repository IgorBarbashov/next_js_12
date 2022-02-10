import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { Hydrate, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '~lib/reactQuery/queryClient';
import { ContextProvider } from '~lib/context/contextProvider';
import { Favicon } from '../elements/favicon';
import '~styles/libs/bootstrap.min.css';
import '~styles/libs/style.css';
import '~styles/globals.css';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
    <>
        <Head>
            <Favicon />
        </Head>
        <QueryClientProvider client = { queryClient }>
            <Hydrate state = { pageProps.dehydratedState }>
                <ContextProvider data = { pageProps.contextData }>
                    <Component { ...pageProps } />
                </ContextProvider>
            </Hydrate>
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    </>
);

export default appWithTranslation(App);
