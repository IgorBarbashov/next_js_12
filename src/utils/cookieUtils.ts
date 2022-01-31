import nookies from 'nookies';
import { GetServerSidePropsContext } from 'next';
import { TStringOrNull } from '~types';

const defaultCookiesOptions = {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
};

type TDefaultCookiesOptions = typeof defaultCookiesOptions;

export const serverSideCookies = {
    getCookie: (
        ctx: GetServerSidePropsContext,
        name: string,
    ): TStringOrNull => {
        const cookies = nookies.get(ctx);
        return cookies[name] || null;
    },

    setCookie: (
        ctx: GetServerSidePropsContext,
        name: string,
        value: string,
        options: TDefaultCookiesOptions = defaultCookiesOptions,
    ): void => {
        nookies.set(ctx, name, value, options);
    },

    deleteCookie: (
        ctx: GetServerSidePropsContext,
        name: string,
    ): void => {
        nookies.destroy(ctx, name);
    },

    isCookieSet: (
        ctx: GetServerSidePropsContext,
        name: string,
    ): boolean => !(serverSideCookies.getCookie(ctx, name) === null),
};
