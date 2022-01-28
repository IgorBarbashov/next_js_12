import axios from 'axios';
import { BASE_URL, API_PATHS } from '../constants/api';

const { COURSES: { ENTITY } } = API_PATHS;

export class CourseService {
    get = () => axios.get(`${BASE_URL}${ENTITY}`);

    getById = (id) => axios.get(`${BASE_URL}${ENTITY}/${id}`);
}
