import axios from 'axios';
import { BASE_URL, API_PATHS } from '~constants';
import { TJwtTokenResponse, TVoidResponse } from '~types';

const {
    AUTH: {
        ENTITY, REGISTER, LOGIN, AUTH, LOGOUT,
    },
} = API_PATHS;

export class AuthService {
    register = (fullName: string, email: string, password: string): TJwtTokenResponse => (
        axios.post(`${BASE_URL}${ENTITY}${REGISTER}`, { fullName, email, password })
    );

    login = (email: string, password: string): TJwtTokenResponse => (
        axios.post(`${BASE_URL}${ENTITY}${LOGIN}`, { email, password })
    );

    checkToken = (): TVoidResponse => axios.get(`${BASE_URL}${ENTITY}${AUTH}`);

    logout = (): TVoidResponse => axios.get(`${BASE_URL}${ENTITY}${LOGOUT}`);
}
