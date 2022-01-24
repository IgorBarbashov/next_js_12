// Elements
import { ErrorElement } from '../elements/error';

function ErrorPage() {
    return (
        <ErrorElement
            statusCode = { 404 }
            title = 'The page you were looking for could not be found.'
        />
    );
}

export default ErrorPage;
