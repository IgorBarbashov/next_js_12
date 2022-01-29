// Elements
import { ErrorElement } from '../elements/error';

const ServerErrorPage = () => (
    <ErrorElement
        statusCode = { 500 }
        title = 'The page you were looking for could not be found.'
    />
);

export default ServerErrorPage;
