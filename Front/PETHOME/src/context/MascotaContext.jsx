import { createContext, useContext, useState } from "react";
import {
  createMascotaRequest,
  getMascotasRequest,
  deleteMascotaRequest,
  getMascotaRequest,
  updateMascotaRequest,
} from "../api/Mascota.api.js";

const MascotaContext = createContext();

export const useMascota = () => {
  const context = useContext(MascotaContext);
  if (!context) {
    throw new Error("useMascota debe ser usado con MascotaProvider");
  }
  return context;
};

export default function MascotaProvider({ children }) {
  const [mascotas, setMascota] = useState([]);

  const getMascotas = async () => {
    try {
      const res = await getMascotasRequest();
      setMascota(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createMascota = async (mascota) => {
    const res = await createMascotaRequest(mascota);
    console.log(res);
  };

  const deleteMascota = async (id) => {
    try {
      const res = await deleteMascotaRequest(id);
      if (res.status == 204)
        setMascota(mascotas.filter((mascotas) => mascotas._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const getMascota = async (id) => {
    try {
      const res = await getMascotaRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateMascota = async (id, mascota) => {
    try {
      await updateMascotaRequest(id, mascota);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MascotaContext.Provider
      value={{
        mascotas,
        createMascota,
        getMascotas,
        deleteMascota,
        getMascota,
        updateMascota,
      }}
    >
      {children}
    </MascotaContext.Provider>
  );
}
