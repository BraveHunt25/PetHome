import { createContext, useContext, useState } from "react";
import {
  createVacunaRequest,
  getVacunasRequest,
  deleteVacunaRequest,
  getVacunaRequest,
  updateVacunaRequest,
} from "../api/VacunaRegistrada.api.js";

const VacunaContext = createContext();

export const useVacuna = () => {
  const context = useContext(VacunaContext);
  if (!context) {
    throw new Error("useVacuna debe ser usado con VacunaProvider");
  }
  return context;
};

export default function VacunaProvider({ children }) {
  const [vacunas, setVacuna] = useState([]);

  const getVacunas = async () => {
    try {
      const res = await getVacunasRequest();
      setVacuna(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createVacuna = async (vacuna) => {
    const res = await createVacunaRequest(vacuna);
    console.log(res);
  };

  const deleteVacuna = async (id) => {
    try {
      const res = await deleteVacunaRequest(id);
      if (res.status == 204)
        setVacuna(vacunas.filter((vacunas) => vacunas._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const getVacuna = async (id) => {
    try {
      const res = await getVacunaRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateVacuna = async (id, vacuna) => {
    try {
      await updateVacunaRequest(id, vacuna);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VacunaContext.Provider
      value={{
        vacunas,
        createVacuna,
        getVacunas,
        deleteVacuna,
        getVacuna,
        updateVacuna,
      }}
    >
      {children}
    </VacunaContext.Provider>
  );
}
