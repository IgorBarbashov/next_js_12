import axios from 'axios';
import qs from 'qs';
import { BASE_URL, API_PATHS } from '~constants';

const { COURSES: { ENTITY } } = API_PATHS;

export class CourseService {
    get = (page, limit) => {
        const query = qs.stringify({ page, limit });
        return axios.get(`${BASE_URL}${ENTITY}?${query}`);
    };

    getById = (id) => axios.get(`${BASE_URL}${ENTITY}/${id}`);
}
