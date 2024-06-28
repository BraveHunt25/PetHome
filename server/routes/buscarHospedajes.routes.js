import { Router } from "express";
import {
    obtenerMenuEspecies,
    obtenerMenuRazas,
    obtenerMenuSucursales,
    obtenerServiciosDisponibles,
    obtenerTiposCuartoSucursal
} from "../controllers/buscarHospedajes.controllers.js"

const router = Router();

// Rutas necesitadas para consultar y desplegar el menú de razas y especies
router.get('/AgregarMascotaBusqueda', obtenerMenuEspecies);
router.get('/AgregarMascotaBusqueda/:idespecie', obtenerMenuRazas);

//Ruta para obtener la lista de sucursales de la cadena de hoteles
router.get('/ObtenerSucursales', obtenerMenuSucursales);

// Ruta para obtener la lista de cuartos que se encuentren en la sucursal solicitada
router.get('/ObtenerCuartos/:sucursal', obtenerTiposCuartoSucursal);

// Ruta para obtener la lista de servicios que ofrezca la cadena de hoteles
router.get('/ObternerServicios', obtenerServiciosDisponibles);

// Ruta para asociar una mascota con el cliente y a una reservación



export default router;