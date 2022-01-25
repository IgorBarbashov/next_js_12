export function TeacherView({
    header,
    tabs,
    content
}) {
    return (
        <div className="wrapper _bg4586">
            {header}
            {tabs}
            {content}
        </div>
    );
}
