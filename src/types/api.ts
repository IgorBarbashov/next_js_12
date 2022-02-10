import { AxiosResponse } from 'axios';
import { DehydratedState } from 'react-query/hydration';

export type TResponse<T> = Promise<AxiosResponse<{ data: T }>>;
export type TVoidResponse = TResponse<void>;

export interface IDehydratedState {
    dehydratedState: DehydratedState;
}
