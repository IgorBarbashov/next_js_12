import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/images/logo.svg';
import logoInverse from '../../../public/images/ct_logo.svg';

export const AuthHeaderElement: FC = (): ReactElement => (
    <div className = 'col-lg-12'>
        <div className = 'main_logo25' id = 'logo'>
            <Link href = '/'>
                <a href = '#'>
                    <Image
                        src = { logo }
                        alt = ''
                        width = { 135 }
                        height = { 32 }
                    />
                </a>
            </Link>
            <Link href = '/'>
                <a href = '#'>
                    <Image
                        className = 'logo-inverse'
                        src = { logoInverse }
                        alt = ''
                        width = { 135 }
                        height = { 32 }
                    />
                </a>
            </Link>
        </div>
    </div>
);
