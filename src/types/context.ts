export interface ICommonContextData {
    slug?: string;
    isLogged?: boolean;
}

export type TContext<T = {}> = {
    contextData: T & ICommonContextData;
}
