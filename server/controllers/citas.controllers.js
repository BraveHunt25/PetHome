/*
STATUS: Por probar 06/04/2024 19:09
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'citas' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Citas = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM citas ORDER BY ID_CITA"
    );
    res.json(result);
};

export const obtener_Citas_Hospedaje = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM citas WHERE ID_HOSPEDAJE = ?",
        [ req.params.hospedaje ]
    );
    
    if(result.length === 0){
        return res.status(404).json({ message: "Citas para el hospedaje no encontradas"});
    }

    res.json(result[0]);
};

export const obtener_Cita = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM citas WHERE ID_HOSPEDAJE = ? AND ID_CITA = ?",
        [ req.params.hospedaje, req.params.id ]
    );

    if(result.length === 0){
        return res.status(404).json({ message: "Cita para el hospedaje no encontrada"});
    }
    res.json(result);
};

export const agregar_Cita = async(req, res) => {
    const { ID_HOSPEDAJE, ID_SERVICIO, ID_EMPLEADO, FECHA_CITA, COSTO_TOTAL } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO citas(ID_HOSPEDAJE, ID_SERVICIO, ID_EMPLEADO, FECHA_CITA, COSTO_TOTAL) VALUES (?, ?, ?, ?, ?)",
        [ ID_HOSPEDAJE, ID_SERVICIO, ID_EMPLEADO, FECHA_CITA, COSTO_TOTAL ]
    );
    console.log(result);
    res.json({
        ID_HOSPEDAJE, 
        ID_SERVICIO, 
        ID_EMPLEADO, 
        FECHA_CITA, 
        COSTO_TOTAL
    });
};

export const actualizar_Cita = async (req, res) => {
    const result = await pool.query(
        "UPDATE citas SET ? WHERE ID_HOSPEDAJE = ? AND ID_CITA = ?",
        [ req.body, req.params.hospedaje, req.params.id ]
    );
    res.json(result);
};

export const eliminar_Cita = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM citas WHERE ID_HOSPEDAJE = ? AND ID_CITA = ?",
        [ req.params.hospedaje, req.params.id ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Cita en el hospedaje no encontrada"});
    }
    else{
        return res.json({ message: "Cita eliminada"});
    }
};