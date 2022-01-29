import Link from 'next/link';

export const ErrorElement = ({
    statusCode,
    title,
}) => (
    <div className = 'coming_soon_style'>
        <div className = 'wrapper coming_soon_style'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-md-12'>
                        <div className = 'cmtk_group'>
                            <div className = 'ct-logo'>
                                <Link href = '/'>
                                    <a>
                                        <img src = '/images/ct_logo.svg' alt = 'logo' />
                                    </a>
                                </Link>
                            </div>
                            <div className = 'cmtk_dt'>
                                <h1 className = 'title_404'>{ statusCode }</h1>
                                <h4 className = 'thnk_title1'>{ title }</h4>
                                <div>
                                    <Link href = '/'>
                                        <a className = 'bk_btn'>Go To Homepage</a>
                                    </Link>
                                </div>
                            </div>
                            <div className = 'tc_footer_main'>
                                <div className = 'tc_footer_left'>
                                    <ul>
                                        <li>
                                            <Link href = '/'>
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className = 'tc_footer_right'>
                                    <p>
                                        &copy; 2021
                                        <Link href = '/'>
                                            <a className = 'footer-link'>
                                                <strong>Lectrum LLC</strong>
                                            </a>
                                        </Link>
                                        . All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
