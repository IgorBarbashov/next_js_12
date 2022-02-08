import {
    createContext, useContext, FC, ReactElement,
} from 'react';
import {
    ICommonContextData, ICourseContextData, ICoursesContextData, IUserContextData,
} from '~types';

export type TUnionContext =
    | ICommonContextData
    | ICourseContextData
    | ICoursesContextData
    | IUserContextData

interface IContextProviderProps {
    data: TUnionContext;
    children: ReactElement;
}

const Context = createContext<TUnionContext>({});

export const ContextProvider: FC<IContextProviderProps> = ({
    data,
    children,
}) => (
    <Context.Provider value = { data }>
        { children }
    </Context.Provider>
);

export const useStore = () => useContext<TUnionContext>(Context);
