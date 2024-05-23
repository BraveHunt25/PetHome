import axios from "./axios.js";

export const getVacunasRequest = () => axios.get("/Vacunas");

export const getVacunaRequest = (id) => axios.get(`/Vacuna/${id}`);

export const createVacunaRequest = (vacuna) =>
  axios.post("/Vacuna", vacuna);

export const updateVacunaRequest = (id,vacuna) => axios.put(`/Vacuna/${id}`, vacuna);

export const deleteVacunaRequest = (id) => axios.delete(`/Vacuna/${id}`);
