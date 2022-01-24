import nookies from 'nookies';

const defaultCookiesOptions = {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
};

export const serverSideCookies = {
    getCookie: (ctx, name) => {
        const cookies = nookies.get(ctx);
        return cookies[name] || null;
    },
    setCookie: (ctx, name, value, options = defaultCookiesOptions) => {
        nookies.set(ctx, name, value, options);
    },
    deleteCookie: (ctx, name) => {
        nookies.destroy(ctx, name);
    },
    isCookieSet: (ctx, name) => !(serverSideCookies.getCookie(ctx, name) === null),
};
