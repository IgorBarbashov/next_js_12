import { NextPage } from 'next';
import { ErrorElement } from '~elements/error';

const ServerErrorPage: NextPage = () => (
    <ErrorElement
        statusCode = { 500 }
        title = 'The page you were looking for could not be found.'
    />
);

export default ServerErrorPage;
