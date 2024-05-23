import axios from "./axios.js";

export const getEspeciesRequest = () => axios.get("/Especies");

export const getEspecieRequest = (id) => axios.get(`/Especie/${id}`);

export const createEspecieRequest = (Especie) =>
  axios.post("/Especie", Especie);

export const updateEspecieRequest = (id,Especie) => axios.put(`/Especie/${id}`, Especie);

export const deleteEspecieRequest = (id) => axios.delete(`/Especie/${id}`);
