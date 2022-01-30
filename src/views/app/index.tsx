import { FC, ReactElement } from 'react';

interface IAppViewProps {
    header: ReactElement;
    content: ReactElement;
    footer: ReactElement;
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
