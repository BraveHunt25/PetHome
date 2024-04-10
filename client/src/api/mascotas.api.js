/*
 * Este archivo genera las peticiones desde el frontend para la tabla 'mascotas'
 * Se exporta al archivo: ./pages/FormularioMascotas.jsx
 */
import axios from 'axios';

export const solicitudCrearMascota = async (mascota) =>
    await axios.post('http://localhost:3000/mascotas', mascota);

export const solicitudConsultarMascotas = async () =>
    await axios.get('http://localhost:3000/mascotas');

export const solicitudEliminarMascota = async (idMascota) =>
    await axios.delete(`http://localhost:3000/mascotas/${idMascota}`);