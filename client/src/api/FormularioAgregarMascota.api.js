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

export const obtenerMenuRazas = async ( idespecie ) => {
    try {
        const response = await axios.get(`http://localhost:4000/AgregarMascotaBusqueda/${idespecie}`);
        return response;
    } catch (error) {
        console.error('Error al obtener las razas: ', error);
        throw error;
    }
}

export const obtenerMenuSucursales = async ( especie ) => {
    try {
        const response = await axios.get(`http://localhost:4000/ObtenerSucursales`);
        return response;
    } catch (error) {
        console.error('Error al obtener las razas: ', error);
        throw error;
    }
}

export const obtenerCatalogoCuartos = async ( sucursal ) => {
    try {
        const response = await axios.get(`http://localhost:4000/ObtenerCuartos/${sucursal}`);
        return response;
    } catch (error) {
        console.error('Error al obtener los cuartos: ', error);
        throw error;
    }
}