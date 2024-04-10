/*
STATUS: Por probar 04/04/2024 19:46
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'resena_hotel' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Resenas_Hotel = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM resena_hotel ORDER BY ID_RESENA_HOTEL"
    );
    res.json(result);
};

export const obtener_Resena_Hotel = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM resena_hotel WHERE ID_RESENA_HOTEL = ?",
        [req.params.id]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "Reseña de hotel no encontrada" });
    }

    res.json(result[0]);
};

export const agregar_Resena_Hotel = async (req, res) => {
    const { ID_SUCURSAL, ID_HOSPEDAJE, DESCRIPCION, CALIFICACION } = req.body;
    const [result] = await pool.query(
        "INSERT INTO resena_hotel(ID_SUCURSAL, ID_HOSPEDAJE, CALIFICACION, DESCRIPCION) VALUES (?, ?, ?, ?)",
        [ID_SUCURSAL, ID_HOSPEDAJE, CALIFICACION, DESCRIPCION]
    );
    console.log(result);
    res.json({
        ID_SUCURSAL,
        ID_HOSPEDAJE,
        CALIFICACION,
        DESCRIPCION
    });
};

export const actualizar_Resena_Hotel = async (req, res) => {
    const result = await pool.query(
        "UPDATE resena_hotel SET ? WHERE ID_RESENA_HOTEL = ?",
        [req.body, req.params.id]
    );
    res.json(result);
};

export const eliminar_Resena_Hotel = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM resena_hotel WHERE ID_RESENA_HOTEL = ?",
        [req.params.id]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Reseña de hotel no encontrada" });
    }
    else {
        return res.json({ message: "Reseña eliminada" });
    }
};