import { AxiosResponse } from 'axios';

export type TGetResponse<T> = Promise<AxiosResponse<{ data: T[] }>>
export type TGetByIdResponse<T> = Promise<AxiosResponse<{ data: T }>>
