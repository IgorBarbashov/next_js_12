import { FC, ReactElement } from 'react';

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
                <img src = '/images/hd_dp.jpg' alt = '' />
            </a>
        </li>
        <li className = 'ui dropdown'>
            <a href = '#' className = 'opts_account log_out _5f7g11' title = 'Log out'>
                Log out
            </a>
        </li>
    </ul>
);
