/*
STATUS: Por probar 04/04/2024 19:40
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'resena_citas' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Resenas_Citas = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM resena_citas ORDER BY ID_RESENA_CITA"
    );
    res.json(result);
};

export const obtener_Resena_Cita = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM resena_citas WHERE ID_RESENA_CITA = ?",
        [req.params.id]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "Reseña de cita no encontrada" });
    }

    res.json(result[0]);
};

export const agregar_Resena_Cita = async (req, res) => {
    const { ID_CITA, ID_HOSPEDAJE, CALIFICACION, DESCRIPCION } = req.body;
    const [result] = await pool.query(
        "INSERT INTO resena_citas(ID_CITA, ID_HOSPEDAJE, CALIFICACION, DESCRIPCION) VALUES (?, ?, ?, ?)",
        [ID_CITA, ID_HOSPEDAJE, CALIFICACION, DESCRIPCION]
    );
    console.log(result);
    res.json({
        ID_CITA,
        ID_HOSPEDAJE,
        CALIFICACION,
        DESCRIPCION
    });
};

export const actualizar_Resena_Cita = async (req, res) => {
    const result = await pool.query(
        "UPDATE resena_citas SET ? WHERE ID_RESENA_CITA = ?",
        [req.body, req.params.id]
    );
    res.json(result);
};

export const eliminar_Resena_Cita = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM resena_citas WHERE ID_RESENA_CITA = ?",
        [req.params.id]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Reseña de cita no encontrada" });
    }
    else {
        return res.json({ message: "Reseña eliminada" });
    }
};