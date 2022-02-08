import { TResponse } from './api';
import { TStringOrNull } from './common';
import { IUserProfile } from './user';

export interface ILoginForm {
    email: string;
    password: string;
    remember: boolean;
}

export interface IRegisterForm {
    fullName: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export interface IAuthStatusObject {
    isLogged: boolean;
    token: TStringOrNull;
    profile: IUserProfile | null;
    errorMessage: TStringOrNull;
}

export type TJwtTokenResponse = TResponse<string>;
