import { useRouter } from 'next/router';

export const ApiErrorElement = () => {
    const router = useRouter();

    return (
        <div className = 'container'>
            <div className = 'cmtk_dt'>
                <div className = 'crse14s center'><h2>Error to fetch data from API</h2></div>
                <div>
                    <div className = 'bk_btn' onClick = { router.reload }>Reload Page</div>
                </div>
            </div>

        </div>
    );
};
