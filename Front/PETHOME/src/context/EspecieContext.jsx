import { createContext, useContext, useState } from "react";
import {
  createEspecieRequest,
  getEspeciesRequest,
  deleteEspecieRequest,
  getEspecieRequest,
  updateEspecieRequest,
} from "../api/Especie.api.js";

const EspecieContext = createContext();

export const useEspecie = () => {
  const context = useContext(EspecieContext);
  if (!context) {
    throw new Error("useEspecie debe ser usado con EspecieProvider");
  }
  return context;
};

export default function EspecieProvider({ children }) {
  const [especies, setEspecie] = useState([]);

  const getEspecies = async () => {
    try {
      const res = await getEspeciesRequest();
      setEspecie(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createEspecie = async (especie) => {
    const res = await createEspecieRequest(especie);
    console.log(res);
  };

  const deleteEspecie = async (id) => {
    try {
      const res = await deleteEspecieRequest(id);
      if (res.status == 204)
        setEspecie(especies.filter((especies) => especies._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const getEspecie = async (id) => {
    try {
      const res = await getEspecieRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateEspecie = async (id, especie) => {
    try {
      await updateEspecieRequest(id, especie);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EspecieContext.Provider
      value={{
        especies,
        createEspecie,
        getEspecies,
        deleteEspecie,
        getEspecie,
        updateEspecie,
      }}
    >
      {children}
    </EspecieContext.Provider>
  );
}

