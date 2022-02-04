import { ParsedUrlQuery } from 'querystring';
import { TResponse } from './api';
import { TContext } from './context';

export interface ICourseInfo {
    requirements: string[];
    descriptions: string[];
    benefits: string[];
    descriptionSummary: string;
}

export interface ICourse {
    hash: string;
    badge: boolean;
    rating: number;
    votes: number;
    poster: string;
    duration: number;
    views: number;
    description: string;
    technologies: string;
    createdBy: string;
    price: number;
    info: ICourseInfo;
    created: string;
}

export type TGetCoursesResponse = TResponse<ICourse[]>;
export type TGetCourseResponse = TResponse<ICourse>;
export type TPutViewsResponse = TGetCourseResponse;

export interface ICourseContextData {
    course: ICourse | null;
}

export interface ICoursesContextData {
    courses: ICourse[] | null;
}

export type TCourseContext = TContext<ICourseContextData>;
export type TCoursesContext = TContext<ICoursesContextData>;

export interface ICoursesDynamicPathSegment extends ParsedUrlQuery {
    slug: string;
}
