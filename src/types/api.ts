import { AxiosResponse } from 'axios';

export type TResponse<T> = Promise<AxiosResponse<{ data: T }>>;
export type TVoidResponse = TResponse<void>;
