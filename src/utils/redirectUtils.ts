import { GetServerSidePropsResult } from 'next';

export const redirectIsLogged = (
    isLogged: boolean,
    destination = '/',
    permanent = false,
): GetServerSidePropsResult<{}> => (
    isLogged
        ? { redirect: { destination, permanent } }
        : { props: {} }
);
