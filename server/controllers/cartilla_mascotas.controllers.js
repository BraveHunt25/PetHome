/*
STATUS: Por probar 04/04/2024 17:51
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'cartilla_mascotas' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Cartillas_Mascotas = async (req, res) => {
    const [result] = await pool.query(
        "SELECT m.ID_MASCOTA, m.NOMBRE_MASCOTA FROM mascotas m LEFT OUTER JOIN cartilla_mascotas c ON m.ID_MASCOTA = c.ID_MASCOTA ORDER BY m.ID_MASCOTA"
    );
    res.json(result);
};

export const obtener_Cartilla_Mascota = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM cartilla_mascotas WHERE ID_MASCOTA = ?",
        [req.params.id]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "No existe una cartilla registrada para la mascota con ese ID" });
    }

    res.json(result[0]);
};

export const agregar_Medicamento_A_Cartilla_Mascota = async (req, res) => {
    const { ID_MEDICAMENTOS, ULTIMA_DOSIS_APLICADA } = req.body;
    const [result] = await pool.query(
        "INSERT INTO cartilla_mascotas(ID_MASCOTA, ID_MEDICAMENTOS, ULTIMA_DOSIS_APLICADA) VALUES (?, ?, ?)",
        [req.params.id, ID_MEDICAMENTOS, ULTIMA_DOSIS_APLICADA]
    );
    console.log(result);
    res.json({
        ID_CARTILLA,
        ID_MASCOTA,
        ID_MEDICAMENTOS,
        ULTIMA_DOSIS_APLICADA
    });
};
export const actualizar_Medicamento_En_Cartilla_Mascota = async (req, res) => {
    const result = await pool.query(
        "UPDATE cartilla_mascotas SET ? WHERE ID_CARTILLA = ?",
        [req.body, req.params.id]
    );
    res.json(result);
};
export const eliminar_Cartilla_Mascota = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM cartilla_mascotas WHERE ID_MASCOTA = ?",
        [req.params.id]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Cartilla no encontrada" });
    }
    else {
        return res.json({ message: "Cartilla eliminada" });
    }
};
export const eliminar_Medicamento_De_Cartilla_Mascota = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM cartilla_mascotas WHERE ID_MASCOTA = ? AND ID_MEDICAMENTOS = ?",
        [req.params.id, req.params.idMedicamento]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Medicamento en cartilla no encontrado" });
    }
    else {
        return res.json({ message: "Medicamento en cartilla eliminada" });
    }
};