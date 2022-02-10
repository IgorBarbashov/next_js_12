import axios from 'axios';
import { BASE_URL, API_PATHS } from '~constants';
import { TUserProfileResponse } from '~types';

const { USER: { ENTITY, PROFILE } } = API_PATHS;

export class UserService {
    getProfile = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}${ENTITY}${PROFILE}`);
            return data;
        } catch (e) {
            throw new Error();
        }
    };

    updateProfile = (firstName: string, lastName: string): TUserProfileResponse => (
        axios.put(`${BASE_URL}${ENTITY}${PROFILE}`, { firstName, lastName })
    );
}
