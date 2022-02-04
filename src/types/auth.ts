import { TResponse } from './api';

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

export type TJwtTokenResponse = TResponse<string>;
