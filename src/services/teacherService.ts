import axios from 'axios';
import qs from 'qs';
import { BASE_URL, API_PATHS } from '~constants';
import { IGetCoursesProps } from '~types';

const { TEACHER: { ENTITY, COURSES } } = API_PATHS;

export class TeacherService {
    getCourses = async ({ page, limit }: IGetCoursesProps = {}) => {
        try {
            const query = qs.stringify({ page, limit });
            const { data } = await axios.get(`${BASE_URL}${ENTITY}${COURSES}?${query}`);
            return data;
        } catch (err) {
            throw new Error();
        }
    };
}
