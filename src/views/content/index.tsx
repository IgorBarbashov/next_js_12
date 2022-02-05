import { FC, ReactElement } from 'react';

interface IContentViewProps {
    content: ReactElement;
    sider: ReactElement | null;
}

export const ContentView: FC<IContentViewProps> = ({
    content,
    sider,
}) => {
    const contentWrapperClasses = sider === null
        ? 'col-xl-12 col-lg-12'
        : 'col-xl-9 col-lg-8';

    return (
        <div className = 'sa4d25'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = { contentWrapperClasses }>
                        <div className = 'section3125'>
                            <div className = 'la5lo1'>
                                { content }
                            </div>
                        </div>
                    </div>
                    { sider === null
                        ? null
                        : (
                            <div className = 'col-xl-3 col-lg-4'>
                                <div className = 'right_side'>
                                    { sider }
                                </div>
                            </div>
                        ) }
                </div>
            </div>
        </div>
    );
};
