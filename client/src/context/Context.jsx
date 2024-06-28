import { createContext, useContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
    const [state, setState] = useState({ text: 'Hello World' });

    return (
        <GeneralContext.Provider value={state}>
            {children}
        </GeneralContext.Provider>
    );
}

export const useGeneralContext = () => useContext(GeneralContext);