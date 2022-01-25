export function LogoElement() {
    return (
        <div className = 'main_logo' id = 'logo'>
            <a href = '#'><img src = '/images/logo.svg' alt = '' /></a>
            <a href = '#'>
                <img
                    className = 'logo-inverse'
                    src = '/images/ct_logo.svg'
                    alt = ''
                />
            </a>
        </div>
    );
}
