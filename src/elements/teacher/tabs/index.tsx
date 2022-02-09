import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useStore } from '~lib/context/contextProvider';
import { ICommonContextData } from '~types';

export const TeacherTabsElement: FC = (): ReactElement => {
    const { slug = '' } = useStore() as ICommonContextData;
    const { t } = useTranslation();

    const tabs = [
        {
            id: 'nav-about-tab', title: t('common:about'), href: '/teacher/about', tabSlug: 'about',
        },
        {
            id: 'nav-courses-tab', title: t('common:myCourses'), href: '/teacher/courses', tabSlug: 'courses',
        },
    ];

    const tabsJsx = tabs.map(({
        id, title, href, tabSlug,
    }) => (
        <Link key = { `teacher-tab-${tabSlug}` } href = { href }>
            <a
                className = { `nav-item nav-link${slug === tabSlug ? ' active' : ''}` }
                id = { id }
                data-toggle = 'tab'
                role = 'tab'
                aria-selected = { slug === tabSlug }
            >
                { title }
            </a
            >
        </Link>
    ));

    return (
        <div className = '_215b15'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = 'col-lg-12'>
                        <div className = 'course_tabs'>
                            <nav>
                                <div
                                    className = 'nav nav-tabs tab_crse'
                                    id = 'nav-tab'
                                    role = 'tablist'
                                >
                                    { tabsJsx }
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
