export function ErrorElement({
    statusCode,
    title,
}) {
    return (
        <div className = 'coming_soon_style'>
            <div className = 'wrapper coming_soon_style'>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-md-12'>
                            <div className = 'cmtk_group'>
                                <div className = 'ct-logo'>
                                    <a href = '/'>
                                        <img src = '/images/ct_logo.svg' alt = 'logo' />
                                    </a>
                                </div>
                                <div className = 'cmtk_dt'>
                                    <h1 className = 'title_404'>{ statusCode }</h1>
                                    <h4 className = 'thnk_title1'>{ title }</h4>
                                    <div>
                                        <a href = '/' className = 'bk_btn'>Go To Homepage</a>
                                    </div>
                                </div>
                                <div className = 'tc_footer_main'>
                                    <div className = 'tc_footer_left'>
                                        <ul>
                                            <li>
                                                <a href = '/'>Home</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className = 'tc_footer_right'>
                                        <p>
                                            &copy; 2021
                                            <a href = '/' className = 'footer-link'>
                                                <strong>Lectrum LLC</strong>
                                            </a>
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
}
