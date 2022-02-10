import axios from 'axios';
import qs from 'qs';
import { BASE_URL, API_PATHS } from '~constants';
import { IGetCoursesProps } from '~types';

const { TEACHER: { ENTITY, COURSES } } = API_PATHS;

export class TeacherService {
    getCourses = async ({ page, limit }: IGetCoursesProps = {}) => {
        const query = qs.stringify({ page, limit });
        return axios.get(`${BASE_URL}${ENTITY}${COURSES}?${query}`);
    };
}
