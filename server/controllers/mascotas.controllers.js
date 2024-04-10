/*
STATUS: Por probar 05/04/2024 19:41
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'mascotas' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Mascotas = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM mascotas ORDER BY ID_MASCOTA"
    );
    res.json(result);
};

export const obtener_Mascota = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM mascotas WHERE ID_MASCOTA = ?",
        [req.params.id]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "Mascota no encontrada" });
    }

    res.json(result[0]);
};

export const agregar_Mascota = async (req, res) => {
    const { NOMBRE_RAZA, NOMBRE_MASCOTA, TAMANO, FECHA_NACIMIENTO, COLOR } = req.body;
    const [result] = await pool.query(
        "INSERT INTO mascotas(NOMBRE_RAZA, NOMBRE_MASCOTA, TAMANO, FECHA_NACIMIENTO, COLOR) VALUES (?, ?, ?, ?, ?)",
        [NOMBRE_RAZA, NOMBRE_MASCOTA, TAMANO, FECHA_NACIMIENTO, COLOR]
    );
    console.log(result);
    res.json({
        NOMBRE_RAZA,
        NOMBRE_MASCOTA,
        TAMANO,
        FECHA_NACIMIENTO,
        COLOR
    });
};

export const actualizar_Mascota = async (req, res) => {
    const result = await pool.query(
        "UPDATE mascotas SET ? WHERE ID_MASCOTA = ?",
        [req.body, req.params.id]
    );
    res.json(result);
};

export const eliminar_Mascota = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM mascotas WHERE ID_MASCOTA = ?",
        [req.params.id]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Datos de mascota no encontrada" });
    }
    else {
        return res.json({ message: "Datos de mascota eliminada" });
    }
};