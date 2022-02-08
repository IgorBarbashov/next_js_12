import { GetServerSidePropsResult, Redirect } from 'next';

export const redirectObject = ({
    destination = '/',
    permanent = false,
} = {}): { redirect: Redirect } => (
    { redirect: { destination, permanent } }
);

export const redirectIsLogged = ({
    isLogged = false,
    destination = '/',
    permanent = false,
} = {}): GetServerSidePropsResult<{}> => (
    isLogged
        ? redirectObject({ destination, permanent })
        : { props: {} }
);
