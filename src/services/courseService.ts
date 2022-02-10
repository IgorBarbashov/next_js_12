import axios from 'axios';
import qs from 'qs';
import { BASE_URL, API_PATHS } from '~constants';
import { TGetCoursesResponse, IGetCoursesProps, IGetCourseProps } from '~types';

const { COURSES: { ENTITY, INCREASE_VIEWS } } = API_PATHS;

export class CourseService {
    get = async ({ page, limit }: IGetCoursesProps = {}) => {
        try {
            const query = qs.stringify({ page, limit });
            const { data } = await axios.get<TGetCoursesResponse>(`${BASE_URL}${ENTITY}?${query}`);
            return data;
        } catch (err) {
            throw new Error();
        }
    };

    increaseViewsCount = async ({ id }: IGetCourseProps) => {
        try {
            const { data } = await axios.put(`${BASE_URL}${ENTITY}/${id}/${INCREASE_VIEWS}`);
            return data;
        } catch (err) {
            throw new Error();
        }
    };
}
