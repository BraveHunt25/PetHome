import { pool } from "../db.js";

//Controlador para obtener la lista de opciones de especies
export const obtenerMenuEspecies = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT ID_ESPECIE as id, NOMBRE_ESPECIE as especie FROM especie"
        );
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

//Controlador para obtener la lista de opciones de razas
export const obtenerMenuRazas = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT r.ID_RAZA AS id, r.NOMBRE_RAZA AS raza FROM raza r, especie e WHERE r.ESPECIEID_ESPECIE = e.ID_ESPECIE AND e.ID_ESPECIE = ?", [req.params.idespecie]
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Controlador para obtener la lista de sucursales de la cadena de hoteles
export const obtenerMenuSucursales = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT ID_SUCURSAL as id, NOMBRE_SUCURSAL as sucursal FROM sucursal");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Controlador para obtener la lista de cuartos que se encuentren en la sucursal solicitada
export const obtenerTiposCuartoSucursal = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT DISTINCT tipo.NOMBRE_CUARTO AS nombre_cuarto, tipo.PRECIO_CUARTO AS precio, suc.NOMBRE_SUCURSAL AS sucursal FROM `tipo_cuarto` tipo, `cuarto` loc, `sucursal` suc WHERE loc.ID_TIPO_CUARTO = tipo.ID_TIPO_CUARTO AND loc.ID_SUCURSAL = suc.ID_SUCURSAL AND suc.NOMBRE_SUCURSAL = ?", [req.params.sucursal]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Controlador para obtener la lista de servicios que tiene la cadena de hoteles
export const obtenerServiciosDisponibles = async (req, res) => {
    const [result] = await pool.query("SELECT NOMBRE_SERVICIO COSTO_BASE FROM tipo_servicio");
    console.log(result);
}

//Controlador para agregar la mascota al cliente
export const CrearMascota = async (req, res) => {
    const [Raza] = req.body;
    const [result_mascota] = await pool.query("INSERT INTO mascotas (NOMBRE_RAZA) VALUES (?)", [req.body.raza]);
    console.log(result_mascota);
    const [result_cliente] = await pool.query("INSERT INTO reservacion (ID_CLIENTE, ID_MASCOTA) VALUES (?, ?)", [req.params.idCliente], [result_mascota.insertId]);
    console.log(result_cliente);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
}