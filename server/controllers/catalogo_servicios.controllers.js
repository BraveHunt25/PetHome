/*
STATUS: Por probar 05/04/2024 20:48
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'catalogo_servicios' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Servicios = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM catalogo_servicios ORDER BY NOMBRE_SERVICIO"
    );
    res.json(result);
};

export const agregar_Servicio = async(req, res) => {
    const { NOMBRE_SERVICIO, COSTO_BASE, COSTO_EXTRA } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO catalogo_servicios(NOMBRE_SERVICIO, COSTO_BASE, COSTO_EXTRA) VALUES (?, ?, ?)",
        [ NOMBRE_SERVICIO, COSTO_BASE, COSTO_EXTRA ]
    );
    console.log(result);
    res.json({
        NOMBRE_SERVICIO, 
        COSTO_BASE, 
        COSTO_EXTRA
    });
};

export const actualizar_Servicio = async (req, res) => {
    const result = await pool.query(
        "UPDATE catalogo_servicios SET ? WHERE ID_SERVICIO = ?",
        [ req.body, req.params.id ]
    );
    res.json(result);
};

export const eliminar_Servicio = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM catalogo_servicios WHERE ID_SERVICIO = ?",
        [ req.params.id ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Servicio no encontrado"});
    }
    else{
        return res.json({ message: "Servicio eliminado"});
    }
};