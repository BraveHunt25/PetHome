import axios from "axios";

export const obtenerMenuEspecies = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/AgregarMascotaBusqueda`);
        return response;
    } catch (error) {
        console.error(`Error al obtener las especies: `, error);
        throw error;
    }
}

export const obtenerMenuRazas = async ( especie ) => {
    try {
        const response = await axios.get(`http://localhost:4000/AgregarMascotaBusqueda/${especie}`);
        return response;
    } catch (error) {
        console.error('Error al obtener las razas: ', error);
        throw error;
    }
}