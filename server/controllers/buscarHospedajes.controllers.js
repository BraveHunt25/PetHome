import { pool } from "../db.js";

//Controlador para obtener la lista de opciones de especies
export const obtenerMenuEspecies = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT ROW_NUMBER() OVER(ORDER BY NOMBRE_ESPECIE ASC) as id, NOMBRE_ESPECIE as especie FROM especie"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

//Controlador para obtener la lista de opciones de razas
export const obtenerMenuRazas = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT ROW_NUMBER() OVER(ORDER BY NOMBRE_RAZA ASC) as id, NOMBRE_RAZA as raza FROM raza WHERE NOMBRE_ESPECIE = ?", [req.params.especie]);
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
    const [result] = await pool.query("SELECT DISTINCT cuarto.ID_TIPO_CUARTO tipo.NOMBRE_CUARTO tipo.PRECIO_CUARTO FROM cuarto INNER JOIN tipo_cuarto ON cuarto.ID_TIPO_CUARTO = tipo.ID_TIPO_CUARTO WHERE ID_SUCURSAL = ?", [req.params.sucursal]);
    res.json(result);
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