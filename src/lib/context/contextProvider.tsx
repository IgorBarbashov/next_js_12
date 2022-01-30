import { createContext, useContext } from 'react';

const Context = createContext({});

export const ContextProvider = ({ data, children }) => (
    <Context.Provider value = { data }>
        { children }
    </Context.Provider>
);

export const useStore = () => useContext(Context);
