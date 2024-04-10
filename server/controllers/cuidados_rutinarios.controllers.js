/*
STATUS: Por probar 04/04/2024 22:40
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'cuidados_rutinarios' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Cuidados_Mascotas = async (req, res) => {
    const [result] = await pool.query(
        "SELECT m.ID_MASCOTA, m.NOMBRE_MASCOTA FROM mascotas m LEFT OUTER JOIN cuidados_rutinarios c ON m.ID_MASCOTA = c.ID_MASCOTA ORDER BY m.ID_MASCOTA"
    );
    res.json(result);
};

export const obtener_Cuidados_Mascota = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM cuidados_rutinarios WHERE ID_MASCOTA = ?",
        [req.params.id]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "No existe datos de cuidados rutinarios para la mascota con ese ID" });
    }

    res.json(result[0]);
};

export const agregar_Cuidados_Mascota = async (req, res) => {
    const { ID_ALIMENTOS, ALERGIAS, CONDICIONES_ESPECIALES } = req.body;
    const [result] = await pool.query(
        "INSERT INTO cuidados_rutinarios( ID_MASCOTA, ID_ALIMENTOS, ALERGIAS, CONDICIONES_ESPECIALES) VALUES (?, ?, ?, ?)",
        [req.params.id, ID_ALIMENTOS, ALERGIAS, CONDICIONES_ESPECIALES]
    );
    console.log(result);
    res.json({
        ID_MASCOTA,
        ID_ALIMENTOS,
        ALERGIAS,
        CONDICIONES_ESPECIALES
    });
};
export const actualizar_Cuidados_Mascota = async (req, res) => {
    const result = await pool.query(
        "UPDATE cuidados_rutinarios SET ? WHERE ID_MASCOTA = ?",
        [req.body, req.params.id]
    );
    res.json(result);
};
export const eliminar_Cuidados_Mascota = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM cuidados_rutinarios WHERE ID_MASCOTA = ?",
        [req.params.id]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Cuidados de mascota no encontrados" });
    }
    else {
        return res.json({ message: "Cuidados eliminados" });
    }
};