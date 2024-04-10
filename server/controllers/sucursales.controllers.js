/*
STATUS: Por probar 05/04/2024 19:54
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'sucursales' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Sucursales = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM sucursales ORDER BY ID_SUCURSAL"
    );
    res.json(result);
};

export const agregar_Sucursal = async(req, res) => {
    const { CIUDAD_UBICACION } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO sucursales(CIUDAD_UBICACION) VALUES (?)",
        [ CIUDAD_UBICACION ]
    );
    console.log(result);
    res.json({ 
        CIUDAD_UBICACION
    });
};

export const actualizar_Sucursal = async (req, res) => {
    const result = await pool.query(
        "UPDATE sucursales SET ? WHERE ID_SUCURSAL = ?",
        [ req.body, req.params.idTipo ]
    );
    res.json(result);
};

export const eliminar_Sucursal = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM sucursales WHERE ID_SUCURSAL = ?",
        [ req.params.idTipo ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Sucursal no encontrada"});
    }
    else{
        return res.json({ message: "Sucursal eliminada"});
    }
};