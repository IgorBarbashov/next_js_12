import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/images/logo.svg';

export const LogoElement: FC = (): ReactElement => (
    <div className = 'main_logo' id = 'logo'>
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
    </div>
);
