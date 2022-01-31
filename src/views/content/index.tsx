import { FC, ReactElement } from 'react';

interface IContentViewProps {
    content: ReactElement;
    sider: ReactElement;
}

export const ContentView: FC<IContentViewProps> = ({
    content,
    sider,
}) => (
    <div className = 'sa4d25'>
        <div className = 'container-fluid'>
            <div className = 'row'>
                <div className = 'col-xl-9 col-lg-8'>
                    <div className = 'section3125'>
                        <div className = 'la5lo1'>
                            { content }
                        </div>
                    </div>
                </div>
                <div className = 'col-xl-3 col-lg-4'>
                    <div className = 'right_side'>
                        { sider }
                    </div>
                </div>
            </div>
        </div>
    </div>
);
