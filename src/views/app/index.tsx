import { FC, ReactElement } from 'react';

interface IAppViewProps {
    header: ReactElement | null;
    content: ReactElement;
    footer: ReactElement | null;
}

export const AppView: FC<IAppViewProps> = ({
    header,
    content,
    footer,
}) => (
    <>
        { header }
        <div className = 'wrapper'>
            { content }
            { footer }
        </div>
    </>
);
