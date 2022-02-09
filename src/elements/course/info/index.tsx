import { FC, ReactElement } from 'react';
import { useStore } from '~lib/context/contextProvider';
import { ICourse, ICourseContextData } from '~types';
import { useTranslation } from 'next-i18next';

export const CourseInfoElement: FC = (): ReactElement => {
    const { course } = useStore() as ICourseContextData;
    const { t } = useTranslation();

    const {
        info: {
            requirements, descriptions, benefits, descriptionSummary,
        },
    } = course as ICourse;

    const requirementsJsx = requirements.map((requirement, index) => (
        <li key = { `requirements-${index}` }>
            <span className = '_5f7g11'>
                { requirement }
            </span
            >
        </li>
    ));

    const descriptionsJsx = descriptions.map((description, index) => (
        <li key = { `descriptions-${index}` }>
            <span className = '_5f7g11'>
                { description }
            </span
            >
        </li>
    ));

    const benefitsJsx = benefits.map((benefit, index) => (
        <li key = { `benefits-${index}` }>
            <span className = '_5f7g11'>
                <strong>{ benefit }</strong>
            </span
            >
        </li>
    ));

    return (
        <div className = '_215b17'>
            <div className = 'container-fluid'>
                <div className = 'row'>
                    <div className = 'col-lg-12'>
                        <div className = 'course_tab_content'>
                            <div className = 'tab-content' id = 'nav-tabContent'>
                                <div
                                    className = 'tab-pane fade show active'
                                    id = 'nav-about'
                                    role = 'tabpanel'
                                >
                                    <div className = '_htg451'>
                                        <div className = '_htg452'>
                                            <h3>{ t('common:requirements') }</h3>
                                            <ul className = '_abc124'>
                                                { requirementsJsx }
                                            </ul>
                                        </div>
                                        <div className = '_htg452 mt-35'>
                                            <h3>{ t('common:description') }</h3>
                                            <ul className = '_abc124'>
                                                { descriptionsJsx }
                                            </ul>
                                            <p>{ descriptionSummary }</p>
                                            <p>
                                                { t('common:benefits') }
                                            </p>
                                            <ul className = '_abc124'>
                                                { benefitsJsx }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
