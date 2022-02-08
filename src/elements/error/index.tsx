import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/images/ct_logo.svg';

interface IErrorElementProps {
    statusCode: number;
    title: string;
}

export const ErrorElement: FC<IErrorElementProps> = ({
    statusCode,
    title,
}): ReactElement => (
    <div className = 'coming_soon_style'>
        <div className = 'wrapper coming_soon_style'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-md-12'>
                        <div className = 'cmtk_group'>
                            <div className = 'ct-logo'>
                                <Link href = '/'>
                                    <a>
                                        <Image
                                            src = { logo }
                                            alt = 'logo'
                                            layout = 'fixed'
                                            width = { 300 }
                                            height = { 71 }
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className = 'cmtk_dt'>
                                <h1 className = 'title_404'>{ statusCode }</h1>
                                <h4 className = 'thnk_title1'>{ title }</h4>
                                <div>
                                    <Link href = '/'>
                                        <a className = 'bk_btn'>Go To Homepage</a>
                                    </Link>
                                </div>
                            </div>
                            <div className = 'tc_footer_main'>
                                <div className = 'tc_footer_left'>
                                    <ul>
                                        <li>
                                            <Link href = '/'>
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className = 'tc_footer_right'>
                                    <p>
                                        &copy; 2021
                                        <Link href = '/'>
                                            <a className = 'footer-link'>
                                                <strong>Lectrum LLC</strong>
                                            </a>
                                        </Link>
                                        . All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
