/*
 * Este archivo genera las peticiones desde el frontend para la tabla 'razas'
 * Se exporta al archivo: ./pages/FormularioRazas.jsx
 */
import axios from "axios";

export const solicitudCrearRaza = async (raza) =>
    await axios.post('http://localhost:3000/razas', raza)

export const solcitudConsultarSoloRazas = async () =>
    await axios.get('http://localhost:3000/razas/porRaza')