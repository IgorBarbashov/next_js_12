import { FC, ReactElement } from 'react';
import { LogoElement } from '~elements/logo';
import { useStore } from '~lib/context/contextProvider';
import { LoggedMenuElement } from '~elements/menu/loggedMenu';
import { UnLoggedMenuElement } from '~elements/menu/unLoggedMenu';
import { ICommonContextData } from '~types';
import Link from 'next/link';

export const HeaderComponent: FC = (): ReactElement => {
    const { isLogged } = useStore() as ICommonContextData;

    return (
        <header className = 'header clearfix'>
            <LogoElement />
            <div>
                <Link href = '/' locale = 'en'>
                    <a>English</a>
                </Link>
                <Link href = '/' locale = 'ru'>
                    <a>Russian</a>
                </Link>
                <Link href = '/' locale = 'de'>
                    <a>Dutch</a>
                </Link>
            </div>
            <div className = 'header_right'>
                { isLogged ? <LoggedMenuElement /> : <UnLoggedMenuElement /> }
            </div>
        </header>
    );
};
