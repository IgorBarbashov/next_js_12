import { FC, ReactElement } from 'react';
import Link from 'next/link';

export const FooterComponent: FC = (): ReactElement => (
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
                                            © 2021
                                            { ' ' }
                                            <Link href = '/'>
                                                <a className = 'footer-link'>
                                                    <strong>Lectrum LLC</strong>
                                                </a>
                                            </Link>
                                            . All Rights Reserved.
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
