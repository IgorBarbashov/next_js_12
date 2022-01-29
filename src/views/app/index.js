export const AppView = ({
    header,
    content,
    footer,
}) => (
    <>
        { header }
        <div className = 'wrapper'>
            { content }
            { footer }
        </div>
    </>
);
