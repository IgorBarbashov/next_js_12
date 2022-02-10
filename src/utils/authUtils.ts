import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { AuthService } from '~services';
import { COOKIES } from '~constants';
import { IAuthStatusObject } from '~types';
import { serverSideCookies } from './cookieUtils';

const defaultAuthStatusObject: IAuthStatusObject = {
    isLogged: false,
    token: null,
    errorMessage: 'Unauthorized',
};

const setAuthData = (ctx: GetServerSidePropsContext, token: string): void => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const resetAuthData = (ctx: GetServerSidePropsContext): void => {
    serverSideCookies.deleteCookie(ctx, COOKIES.JWT_TOKEN);
    axios.defaults.headers.common.Authorization = '';
};

export const getAuthData = async (ctx: GetServerSidePropsContext): Promise<IAuthStatusObject> => {
    const authService = new AuthService();
    const authStatusObject = { ...defaultAuthStatusObject };

    const token = serverSideCookies.getCookie(ctx, COOKIES.JWT_TOKEN);
    if (token === null) {
        resetAuthData(ctx);
        return defaultAuthStatusObject;
    }

    setAuthData(ctx, token);
    authStatusObject.token = token;
    try {
        await authService.checkToken();
        authStatusObject.isLogged = true;
        authStatusObject.errorMessage = null;
    } catch (e) {
        resetAuthData(ctx);
        return defaultAuthStatusObject;
    }

    return authStatusObject;
};
