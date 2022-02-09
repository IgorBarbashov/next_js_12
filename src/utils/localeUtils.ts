import { GetStaticPropsContext, GetServerSidePropsContext } from 'next';
import { i18n } from '../../configs/next/i18n';

type PropsType = GetStaticPropsContext | GetServerSidePropsContext;

export const getLocale = (ctx: PropsType): string => {
    const { locale, defaultLocale } = ctx;
    return locale || defaultLocale || i18n.defaultLocale;
};
