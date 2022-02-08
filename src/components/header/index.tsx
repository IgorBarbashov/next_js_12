import { FC, ReactElement } from 'react';
import { LogoElement } from '~elements/logo';
import { useStore } from '~lib/context/contextProvider';
import { ICommonContextData } from '~types';
import { LoggedMenuElement } from '~elements/menu/loggedMenu';
import { UnLoggedMenuElement } from '~elements/menu/unLoggedMenu';

export const HeaderComponent: FC = (): ReactElement => {
    const { isLogged = false } = useStore() as ICommonContextData;

    return (
        <header className = 'header clearfix'>
            <LogoElement />
            <div className = 'header_right'>
                { isLogged ? <LoggedMenuElement /> : <UnLoggedMenuElement /> }
            </div>
        </header>
    );
};
