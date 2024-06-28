import { createContext, useContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
    const [valoresReservacion, setValoresReservacion] = useState({
        sucursal: '',
        llegada: '',
        salida: ''
    });

    const [razasBusquedaCuartos, setRazasBusquedaCuartos] = useState([])

    const [progreso, setProgreso] = useState(1);

    return (
        <GeneralContext.Provider value={{ valoresReservacion, setValoresReservacion, razasBusquedaCuartos, setRazasBusquedaCuartos, progreso, setProgreso }}>
            {children}
        </GeneralContext.Provider>
    );
}

export const useGeneralContext = () => useContext(GeneralContext);