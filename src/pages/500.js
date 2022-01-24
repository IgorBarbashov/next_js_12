// Elements
import { ErrorElement } from '../elements/error';

function ServerErrorPage() {
    return (
        <ErrorElement
            statusCode = { 500 }
            title = 'The page you were looking for could not be found.'
        />
    );
}

export default ServerErrorPage;
