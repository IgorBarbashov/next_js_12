import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const FooterComponent: FC = (): ReactElement => {
    const { t } = useTranslation();

    return (
        <footer className = 'footer mt-30'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-lg-12'>
                        <div className = 'footer_bottm'>
                            <div className = 'row'>
                                <div className = 'col-md-6'>
                                    <ul className = 'fotb_left'>
                                        <li>
                                            <p>
                                                © 2022
                                                { ' ' }
                                                <Link href = '/'>
                                                    <a className = 'footer-link'>
                                                        <strong>Lectrum LLC</strong>
                                                    </a>
                                                </Link>
                                                { `. ${t('common:copyRight')}` }
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
