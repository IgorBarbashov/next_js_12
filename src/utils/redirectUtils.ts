import { Redirect } from 'next';

export const redirectObject = ({
    destination = '/',
    permanent = false,
} = {}): { redirect: Redirect } => (
    {
        redirect:
            {
                destination,
                permanent,
            },
    }
);
