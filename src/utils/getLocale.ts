import { GetStaticPropsContext, GetServerSidePropsContext } from 'next';
import { i18n } from '../../configs/next/i18n';

type PropsType = GetStaticPropsContext | GetServerSidePropsContext;

export const getLocale = (context: PropsType): string => {
    const { locale, defaultLocale } = context;

    return locale || defaultLocale || i18n.defaultLocale;
};
