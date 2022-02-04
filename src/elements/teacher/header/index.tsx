import { FC, ReactElement } from 'react';
import { useStore } from '~lib/context/contextProvider';
import { IUserContextData } from '~types';
import Image from 'next/image';

export const TeacherHeaderElement: FC = (): ReactElement => {
    const { user: { avatar, name } } = useStore() as IUserContextData;

    return (
        <div className = '_216b01'>
            <div className = 'container-fluid'>
                <div className = 'row justify-content-md-center'>
                    <div className = 'col-md-10'>
                        <div className = 'section3125 rpt145'>
                            <div className = 'row'>
                                <div className = 'col-lg-7'>
                                    <div className = 'dp_dt150'>
                                        <div className = 'img148'>
                                            <Image
                                                src = { avatar }
                                                alt = ''
                                                width = { 106 }
                                                height = { 106 }
                                            />
                                        </div>
                                        <div className = 'prfledt1'>
                                            <h2>{ name }</h2>
                                            <span>UI / UX Designer and Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
