import {
    createContext, useContext, FC, ReactElement,
} from 'react';
import { ICourseContextData, ICoursesContextData, IUserContextData } from '~types';

export type TUnionContext = {}
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
