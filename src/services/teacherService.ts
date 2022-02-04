import axios from 'axios';
import qs from 'qs';
import { BASE_URL, API_PATHS } from '~constants';
import { TGetCoursesResponse } from '~types';

const { TEACHER: { ENTITY, COURSES } } = API_PATHS;

export class TeacherService {
    getCourses = (page?: number, limit?: number): TGetCoursesResponse => {
        const query = qs.stringify({ page, limit });
        return axios.get(`${BASE_URL}${ENTITY}${COURSES}?${query}`);
    };
}
