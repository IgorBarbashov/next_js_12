/* eslint-disable no-unused-vars */
import { QueryClient, useQuery } from 'react-query';
import { CourseService, TeacherService, UserService } from '~services';
import {
    ICourse, IGetCourseProps,
    IGetCoursesProps,
    IUserProfile,
    TAnyObject, TGetCourseResponseData,
    TGetCoursesResponse,
    TGetCoursesResponseData, TPutViewsResponse, TStringOrNumber,
    TUserProfileResponse, TUserProfileResponseData,
} from '~types';

export const queryClient = new QueryClient();
const courseService = new CourseService();
const userService = new UserService();
const teacherService = new TeacherService();

export enum QUERY_KEYS {
    GET_ALL_COURSES = 'getAllCourses',
    GET_USER_PROFILE = 'getUserProfile',
    GET_TEACHER_COURSES = 'getTeacherCourses',
    INCREASE_VIEWS_COUNT_AND_GET_COURSE = 'increaseViewsCountAndGetCourse',
}

const QUERY_CONFIGS = {
    [QUERY_KEYS.GET_ALL_COURSES]: {
        queryKey: QUERY_KEYS.GET_ALL_COURSES,
        queryFn: (queryFnProps: IGetCoursesProps): TGetCoursesResponse => courseService.get(queryFnProps),
        selectFn: (data: TGetCoursesResponseData): ICourse[] | null => data?.data ?? null,
    },
    [QUERY_KEYS.GET_USER_PROFILE]: {
        queryKey: QUERY_KEYS.GET_USER_PROFILE,
        queryFn: (): TUserProfileResponse => userService.getProfile(),
        selectFn: (data: TUserProfileResponseData): IUserProfile | null => data?.data ?? null,
    },
    [QUERY_KEYS.GET_TEACHER_COURSES]: {
        queryKey: QUERY_KEYS.GET_TEACHER_COURSES,
        queryFn: (queryFnProps: IGetCoursesProps): TGetCoursesResponse => teacherService.getCourses(queryFnProps),
        selectFn: (data: TGetCoursesResponseData): ICourse[] | null => data?.data ?? null,
    },
    [QUERY_KEYS.INCREASE_VIEWS_COUNT_AND_GET_COURSE]: {
        queryKey: QUERY_KEYS.INCREASE_VIEWS_COUNT_AND_GET_COURSE,
        queryFn: (queryFnProps: IGetCourseProps): TPutViewsResponse => courseService.increaseViewsCount(queryFnProps),
        selectFn: (data: TGetCourseResponseData): ICourse | null => data?.data ?? null,
    },
};

export const useQueryData = <T, Q = TAnyObject>(
    queryKey: QUERY_KEYS | [QUERY_KEYS, TStringOrNumber],
    queryFnProps?: Q,
): T | null => {
    const configKey = Array.isArray(queryKey) ? queryKey[0] : queryKey;
    const config = QUERY_CONFIGS[configKey];

    const { data } = useQuery<unknown, unknown, T>(
        queryKey,
        // @ts-ignore
        () => config.queryFn(queryFnProps),
        {
            refetchInterval: false,
            retry: false,
            // @ts-ignore
            select: config.selectFn,
        },
    );

    return data ?? null;
};
