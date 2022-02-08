import axios from 'axios';
import qs from 'qs';
import { BASE_URL, API_PATHS } from '~constants';
import {
    TStringOrNumber, TGetCoursesResponse, TGetCourseResponse, TPutViewsResponse,
} from '~types';

const { COURSES: { ENTITY, INCREASE_VIEWS } } = API_PATHS;

export class CourseService {
    get = (page?: number, limit?: number): TGetCoursesResponse => {
        const query = qs.stringify({ page, limit });
        return axios.get(`${BASE_URL}${ENTITY}?${query}`);
    };

    getById = (id: TStringOrNumber): TGetCourseResponse => (
        axios.get(`${BASE_URL}${ENTITY}/${id}`)
    );

    increaseViewsCount = (id: TStringOrNumber): TPutViewsResponse => (
        axios.put(`${BASE_URL}${ENTITY}/${id}/${INCREASE_VIEWS}`)
    );
}
