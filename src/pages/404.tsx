import { ReactElement } from 'react';
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { SSRConfig, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { ErrorElement } from '~elements/error';
import { getLocale } from '~utils';

const NotFoundPage: NextPage = (): ReactElement => {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{ t('common:pageNotFoundTitle') }</title>
            </Head>
            <ErrorElement
                statusCode = { 404 }
                title = { t('common:pageNotFoundDescription') }
            />
        </>
    );
};

export const getStaticProps: GetStaticProps<SSRConfig> = async (
    context,
): Promise<GetStaticPropsResult<SSRConfig>> => ({
    props: {
        ...await serverSideTranslations(getLocale(context), ['common']),
    },
});

export default NotFoundPage;
