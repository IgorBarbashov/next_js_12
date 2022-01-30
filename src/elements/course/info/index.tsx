import { useStore } from '~lib/context/contextProvider';

export const CourseInfoElement = () => {
    const {
        course: {
            info: {
                requirements, descriptions, benefits, descriptionSummary,
            },
        },
    } = useStore();

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
                                            <h3>Requirements</h3>
                                            <ul className = '_abc124'>
                                                { requirementsJsx }
                                            </ul>
                                        </div>
                                        <div className = '_htg452 mt-35'>
                                            <h3>Description</h3>
                                            <ul className = '_abc124'>
                                                { descriptionsJsx }
                                            </ul>
                                            <p>{ descriptionSummary }</p>
                                            <p>
                                                Throughout the course we cover tons of tools and
                                                technologies including:
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
