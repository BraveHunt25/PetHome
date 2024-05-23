import { createContext, useContext, useState } from "react";
import {
  createClienteRequest,
  getClientesRequest,
  deleteClienteRequest,
  getClienteRequest,
  updateClienteRequest,
} from "../api/Cliente.api.js";

const ClienteContext = createContext();

export const useCliente = () => {
  const context = useContext(ClienteContext);
  if (!context) {
    throw new Error("useCliente debe ser usado con ClienteProvider");
  }
  return context;
};

export default function ClienteProvider({ children }) {
  const [clientes, setCliente] = useState([]);

  const getClientes = async () => {
    try {
      const res = await getClientesRequest();
      setCliente(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createCliente = async (cliente) => {
    const res = await createClienteRequest(cliente);
    console.log(res);
  };

  const deleteCliente = async (id) => {
    try {
      const res = await deleteClienteRequest(id);
      if (res.status == 204)
        setCliente(clientes.filter((clientes) => clientes._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const getCliente = async (id) => {
    try {
      const res = await getClienteRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateCliente = async (id, cliente) => {
    try {
      await updateClienteRequest(id, cliente);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClienteContext.Provider
      value={{
        clientes,
        createCliente,
        getClientes,
        deleteCliente,
        getCliente,
        updateCliente,
      }}
    >
      {children}
    </ClienteContext.Provider>
  );
}
