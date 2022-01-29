import { createContext, useContext } from 'react';

const Context = createContext({});

export function ContextProvider({ data, children }) {
    return (
        <Context.Provider value = { data }>
            { children }
        </Context.Provider>
    );
}

export const useStore = () => useContext(Context);
