import axios from 'axios';
import { BASE_URL, API_PATHS } from '~constants';
import { TJwtTokenResponse, TVoidResponse } from '~types';

const {
    AUTH: {
        ENTITY, REGISTER, LOGIN, AUTH, LOGOUT,
    },
} = API_PATHS;

export class AuthService {
    register = (name: string, email: string, password: string): TJwtTokenResponse => (
        axios.post(`${BASE_URL}${ENTITY}${REGISTER}`, { name, email, password })
    );

    login = (email: string, password: string): TJwtTokenResponse => (
        axios.post(`${BASE_URL}${ENTITY}${LOGIN}`, { email, password })
    );

    checkToken = async () => {
        try {
            await axios.get(`${BASE_URL}${ENTITY}${AUTH}`);
        } catch (e) {
            throw new Error();
        }
    };

    logout = (): TVoidResponse => axios.get(`${BASE_URL}${ENTITY}${LOGOUT}`);
}
