import { FC, ReactElement } from 'react';
import Image from 'next/image';

export const MenuElement: FC = (): ReactElement => (
    <ul>
        <li>
            <a
                href = '#'
                className = 'upload_btn'
                title = 'Create New Course'
            >
                Create New Course
            </a
            >
        </li>
        <li className = 'ui dropdown'>
            <a href = '#' className = 'opts_account _df7852' title = 'Account'>
                John Dou
                <Image
                    src = '/images/hd_dp.jpg'
                    alt = ''
                    layout = 'fixed'
                    width = { 36 }
                    height = { 36 }
                />
            </a>
        </li>
        <li className = 'ui dropdown'>
            <a href = '#' className = 'opts_account log_out _5f7g11' title = 'Log out'>
                Log out
            </a>
        </li>
    </ul>
);
