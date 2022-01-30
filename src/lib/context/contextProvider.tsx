import {
    createContext, useContext, FC, ReactElement,
} from 'react';
import { TAnyObject } from '~types';

interface IContextProviderProps {
    data: TAnyObject;
    children: ReactElement;
}

const Context = createContext<TAnyObject>({});

export const ContextProvider: FC<IContextProviderProps> = ({
    data,
    children,
}) => (
    <Context.Provider value = { data }>
        { children }
    </Context.Provider>
);

export const useStore = () => useContext(Context);
