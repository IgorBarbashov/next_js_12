import { ParsedUrlQuery } from 'querystring';
import { TContext } from './context';
import { ICourse } from './courses';

export interface ITeacher {
    avatarSrc: string;
    name: string;
    professional: string;
}

export interface ITeacherContextData {
    teacher: ITeacher;
    courses: ICourse[] | null;
    slug: string;
}

export type ITeacherContext = TContext<ITeacherContextData>

export interface ITeacherDynamicPathSegment extends ParsedUrlQuery {
    slug: string;
}
