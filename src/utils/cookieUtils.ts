import nookies, { parseCookies, setCookie, destroyCookie } from 'nookies';
import { GetServerSidePropsContext } from 'next';
import { TStringOrNull } from '~types';

const path = '/';

const defaultCookiesOptions = {
    maxAge: 30 * 24 * 60 * 60,
    path,
};

type TDefaultCookiesOptions = typeof defaultCookiesOptions;

export const serverSideCookies = {
    getCookie: (
        ctx: GetServerSidePropsContext,
        name: string,
    ): TStringOrNull => {
        const cookies = nookies.get(ctx);
        return cookies[name] ?? null;
    },

    setCookie: (
        ctx: GetServerSidePropsContext,
        name: string,
        value: string,
        options: TDefaultCookiesOptions = defaultCookiesOptions,
    ): void => {
        nookies.set(ctx, name, value, options);
    },

    setSessionCookie: (
        ctx: GetServerSidePropsContext,
        name: string,
        value: string,
        options: TDefaultCookiesOptions = defaultCookiesOptions,
    ): void => {
        const { maxAge, ...restOptions } = options;
        nookies.set(ctx, name, value, restOptions);
    },

    deleteCookie: (
        ctx: GetServerSidePropsContext,
        name: string,
    ): void => {
        nookies.destroy(ctx, name, { path });
    },

    isCookieSet: (
        ctx: GetServerSidePropsContext,
        name: string,
    ): boolean => !(serverSideCookies.getCookie(ctx, name) === null),
};

export const clientCookies = {
    getCookie: (name: string): TStringOrNull => {
        const cookies = parseCookies();
        return cookies[name] ?? null;
    },

    setCookie: (
        name: string,
        value: string,
        options: TDefaultCookiesOptions = defaultCookiesOptions,
    ): void => {
        setCookie(null, name, value, options);
    },

    setSessionCookie: (
        name: string,
        value: string,
        options: TDefaultCookiesOptions = defaultCookiesOptions,
    ): void => {
        const { maxAge, ...restOptions } = options;
        setCookie(null, name, value, restOptions);
    },

    deleteCookie: (name: string): void => {
        destroyCookie(null, name, { path });
    },

    isCookieSet: (name: string): boolean => !(clientCookies.getCookie(name) === null),
};
