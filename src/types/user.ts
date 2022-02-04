import { ParsedUrlQuery } from 'querystring';
import { TContext } from './context';
import { TResponse } from './api';

export interface IUserProfile {
    hash: string;
    name: string;
    email: string;
    avatar: string;
}

export type TUserProfileResponse = TResponse<IUserProfile>;

export interface IUserContextData {
    user: IUserProfile;
}

export type IUserContext = TContext<IUserContextData>;

export interface IUserDynamicPathSegment extends ParsedUrlQuery {
    slug: string;
}