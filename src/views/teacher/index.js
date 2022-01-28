export function TeacherView({
    header,
    tabs,
    content,
}) {
    return (
        <>
            { header }
            { tabs }
            { content }
        </>
    );
}
