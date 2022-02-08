import { SchemaOf } from 'yup';
import * as yup from 'yup';
import { ILoginForm, IRegisterForm } from '~types';

export const loginFormSchema: SchemaOf<ILoginForm> = yup.object({
    email: yup.string().defined().email().required(),
    password: yup.string().defined().required(),
    remember: yup.boolean().defined().required(),
});

export const registerFormSchema: SchemaOf<IRegisterForm> = yup.object({
    fullName: yup.string().defined().required(),
    email: yup.string().defined().email().required(),
    password: yup.string().defined().required(),
    repeatPassword: yup.string().defined().required(),
});
