/*
 * Este archivo genera las peticiones desde el frontend para la tabla 'especies'
 * Se exporta al archivo: ./pages/FormularioEspecies.jsx
 */
import axios from "axios";

export const solicitudCrearEspecie = async (especie) =>
    await axios.post('http://localhost:3000/especies', especie)