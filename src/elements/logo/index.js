import Link from 'next/link';

export const LogoElement = () => (
    <div className = 'main_logo' id = 'logo'>
        <Link href = '/'>
            <a><img src = '/images/logo.svg' alt = '' /></a>
        </Link>
        <Link href = '/'>
            <a>
                <img
                    className = 'logo-inverse'
                    src = '/images/ct_logo.svg'
                    alt = ''
                />
            </a>
        </Link>
    </div>
);
