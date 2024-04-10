/*
STATUS: Por probar 05/04/2024 19:20
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'reservacion' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Resevaciones = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM reservacion ORDER BY ID_RESERVACION"
    );
    res.json(result);
};

export const obtener_Reservacion = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM reservacion WHERE ID_RESERVACION = ?",
        [ req.params.id ]
    );
    
    if(result.length === 0){
        return res.status(404).json({ message: "Reservacion no encontrada"});
    }

    res.json(result[0]);
};

export const agregar_Reservacion = async(req, res) => {
    const { ID_RESERVACION, ID_MASCOTA, CURP } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO reservacion(ID_RESERVACION, ID_MASCOTA, CURP) VALUES (?, ?, ?)",
        [ ID_RESERVACION, ID_MASCOTA, CURP ]
    );
    console.log(result);
    res.json({
        ID_RESERVACION, 
        ID_MASCOTA, 
        CURP
    });
};

export const actualizar_Reservacion = async (req, res) => {
    const result = await pool.query(
        "UPDATE reservacion SET ? WHERE ID_RESERVACION = ?",
        [ req.body, req.params.id ]
    );
    res.json(result);
};

export const eliminar_Reservacion = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM reservacion WHERE ID_RESERVACION = ?",
        [ req.params.id ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Reservación no encontrada"});
    }
    else{
        return res.json({ message: "Reservación eliminada"});
    }
};