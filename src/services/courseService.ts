import axios from 'axios';
import qs from 'qs';
import { BASE_URL, API_PATHS } from '~constants';
import {
    ICourse, TGetResponse, TGetByIdResponse, TStringOrNumber,
} from '~types';

const { COURSES: { ENTITY } } = API_PATHS;

export class CourseService {
    get = (page?: number, limit?: number): TGetResponse<ICourse> => {
        const query = qs.stringify({ page, limit });
        return axios.get(`${BASE_URL}${ENTITY}?${query}`);
    };

    getById = (id: TStringOrNumber): TGetByIdResponse<ICourse> => axios.get(`${BASE_URL}${ENTITY}/${id}`);
}
