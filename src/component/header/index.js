// Elements
import { LogoElement } from '../../elements/logo';
import { MenuElement } from '../../elements/menu';

export const HeaderComponent = () => (
    <header className = 'header clearfix'>
        <LogoElement />
        <div className = 'header_right'>
            <MenuElement />
        </div>
    </header>
);
