import axios from "./axios.js";

export const getClientesRequest = () => axios.get("/Clientes");

export const getClienteRequest = (id) => axios.get(`/Cliente/${id}`);

export const createClienteRequest = (cliente) =>
  axios.post("/Cliente", cliente);

export const updateClienteRequest = (id,cliente) => axios.put(`/Cliente/${id}`, cliente);

export const deleteClienteRequest = (id) => axios.delete(`/Cliente/${id}`);
