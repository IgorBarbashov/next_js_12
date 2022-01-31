import { ReactElement } from 'react';
import { NextPage } from 'next';
import { ErrorElement } from '~elements/error';

const NotFoundPage: NextPage = (): ReactElement => (
    <ErrorElement
        statusCode = { 404 }
        title = 'The page you were looking for could not be found.'
    />
);

export default NotFoundPage;
