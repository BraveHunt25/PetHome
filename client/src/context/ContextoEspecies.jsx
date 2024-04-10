import { Children, createContext } from 'react';

export const ContextoEspecies = createContext();

export const ProveedorContextoEspecies = ({ Children }) => {
    return (
        <ContextoEspecies.Provider value={{}}>
            {Children}
        </ContextoEspecies.Provider>
    );
};
