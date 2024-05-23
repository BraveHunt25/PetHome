import { createContext, useContext, useState } from "react";
import {
  createCuidadoRequest,
  getCuidadosRequest,
  deleteCuidadoRequest,
  getCuidadoRequest,
  updateCuidadoRequest,
} from "../api/Cuidado.api.js";

const CuidadoContext = createContext();

export const useCuidado = () => {
  const context = useContext(CuidadoContext);
  if (!context) {
    throw new Error("useCuidado debe ser usado con CuidadoProvider");
  }
  return context;
};

export default function CuidadoProvider({ children }) {
  const [cuidados, setCuidado] = useState([]);

  const getCuidados = async () => {
    try {
      const res = await getCuidadosRequest();
      setCuidado(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createCuidado = async (cuidado) => {
    const res = await createCuidadoRequest(cuidado);
    console.log(res);
  };

  const deleteCuidado = async (id) => {
    try {
      const res = await deleteCuidadoRequest(id);
      if (res.status == 204)
        setCuidado(cuidados.filter((cuidados) => cuidados._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const getCuidado = async (id) => {
    try {
      const res = await getCuidadoRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateCuidado = async (id, cuidado) => {
    try {
      await updateCuidadoRequest(id, cuidado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CuidadoContext.Provider
      value={{
        cuidados,
        createCuidado,
        getCuidados,
        deleteCuidado,
        getCuidado,
        updateCuidado,
      }}
    >
      {children}
    </CuidadoContext.Provider>
  );
}
