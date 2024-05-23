import axios from "./axios.js";

export const getMascotasRequest = () => axios.get("/Mascotas");

export const getMascotaRequest = (id) => axios.get(`/Mascota/${id}`);

export const createMascotaRequest = (mascota) =>
  axios.post("/Mascota", mascota);

export const updateMascotaRequest = (id,mascota) => axios.put(`/Mascota/${id}`, mascota);

export const deleteMascotaRequest = (id) => axios.delete(`/Mascota/${id}`);
