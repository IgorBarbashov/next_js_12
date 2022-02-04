export interface ICommonContextData {
    slug?: string;
}

export type TContext<T> = {
    contextData: T & ICommonContextData;
}
