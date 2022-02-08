import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { AuthService, UserService } from '~services';
import { COOKIES } from '~constants';
import { IAuthStatusObject } from '~types';
import { serverSideCookies } from './cookieUtils';

const authService = new AuthService();
const userService = new UserService();

const defaultAuthStatusObject: IAuthStatusObject = {
    isLogged: false,
    token: null,
    profile: null,
    errorMessage: 'Unauthorized',
};

const setAuthData = (ctx: GetServerSidePropsContext, token: string): void => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const resetAuthData = (ctx: GetServerSidePropsContext): void => {
    serverSideCookies.deleteCookie(ctx, COOKIES.JWT_TOKEN);
    axios.defaults.headers.common.Authorization = '';
};

export const getAuthData = async (ctx: GetServerSidePropsContext, getProfile = true): Promise<IAuthStatusObject> => {
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

    if (getProfile) {
        try {
            const { data } = await userService.getProfile();
            authStatusObject.profile = data?.data ?? null;
        } catch (e) {
            authStatusObject.errorMessage = 'Get profile error';
        }
    }

    return authStatusObject;
};
