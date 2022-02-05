import { ParsedUrlQuery } from 'querystring';
import { TContext } from './context';
import { TResponse } from './api';
import { ICourse } from './courses';

export interface IUserProfile {
    hash: string;
    name: string;
    email: string;
    avatar: string;
}

export type TUserProfileResponse = TResponse<IUserProfile>;

export interface IUserContextData {
    user: {
        profile: IUserProfile | null;
        courses?: ICourse[] | null;
    }
}

export type TUserContext = TContext<IUserContextData>;

export interface IUserDynamicPathSegment extends ParsedUrlQuery {
    slug: string;
}
