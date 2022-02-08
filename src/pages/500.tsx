import { ReactElement } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ErrorElement } from '~elements/error';

const ServerErrorPage: NextPage = (): ReactElement => (
    <>
        <Head>
            <title>Page not found</title>
        </Head>
        <ErrorElement
            statusCode = { 500 }
            title = 'The page you were looking for could not be found.'
        />
    </>
);

export default ServerErrorPage;
