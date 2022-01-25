export function AppView({
    header,
    content,
    footer,
}) {
    return (
        <>
            { header }
            <div className = 'wrapper'>
                { content }
                { footer }
            </div>
        </>
    );
}
