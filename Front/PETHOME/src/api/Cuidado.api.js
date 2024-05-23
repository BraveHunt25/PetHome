import axios from "./axios.js";

export const getCuidadosRequest = () => axios.get("/Cuidados");

export const getCuidadoRequest = (id) => axios.get(`/Cuidado/${id}`);

export const createCuidadoRequest = (cuidado) =>
  axios.post("/Cuidado", cuidado);

export const updateCuidadoRequest = (id,cuidado) => axios.put(`/Cuidado/${id}`, cuidado);

export const deleteCuidadoRequest = (id) => axios.delete(`/Cuidado/${id}`);
