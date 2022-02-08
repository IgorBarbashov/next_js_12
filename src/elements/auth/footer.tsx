import { FC, ReactElement } from 'react';
import Link from 'next/link';

export const AuthFooterElement: FC = (): ReactElement => (
    <div className = 'sign_footer'>
        { '© 2022 ' }
        <Link href = '/'>
            <a>
                <strong>Lectrum LLC</strong>
            </a>
        </Link>
        . All Rights Reserved.
    </div>
);
