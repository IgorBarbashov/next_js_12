import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { BASE_URL, API_PATHS } from '~constants';
import { ICourse } from '~types';

const { COURSES: { ENTITY } } = API_PATHS;

export class CourseService {
    get = (page: number, limit: number): Promise<AxiosResponse<ICourse[]>> => {
        const query = qs.stringify({ page, limit });
        return axios.get(`${BASE_URL}${ENTITY}?${query}`);
    };

    getById = (id: number): Promise<AxiosResponse<ICourse>> => axios.get(`${BASE_URL}${ENTITY}/${id}`);
}
