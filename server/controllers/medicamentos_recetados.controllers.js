/*
STATUS: Por probar 04/04/2024 21:54
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'medicamentos_recetados' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Mascotas_Medicadas = async (req, res) => {
    const [result] = await pool.query(
        "SELECT m.ID_MASCOTA, m.NOMBRE_MASCOTA FROM mascotas m LEFT OUTER JOIN medicamentos_recetados r ON m.ID_MASCOTA = r.ID_MASCOTA ORDER BY ID_MASCOTA"
    );
    res.json(result);
};

export const obtener_Medicamentos_Recetados = async (req, res) => {
    const [result] = await pool.query(
        "SELECT ID_MEDICAMENTOS, DOSIS_FALTANTES, FRECUENCIA_APLICACION, ULTIMA_DOSIS_APLICADA FROM medicamentos_recetados WHERE ID_MASCOTA = ?",
        [req.params.id]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "No hay medicamentos recetados para esta mascota" });
    }

    res.json(result[0]);
};

export const agregar_Medicamento_Mascota = async (req, res) => {
    const { ID_MEDICAMENTOS, DOSIS_FALTANTES, FRECUENCIA_APLICACION, ULTIMA_DOSIS_APLICADA } = req.body;
    const [result] = await pool.query(
        "INSERT INTO especies(ID_MASCOTA, ID_MEDICAMENTOS, DOSIS_FALTANTES, FRECUENCIA_APLICACION, ULTIMA_DOSIS_APLICADA) VALUES (?, ?, ?, ?, ?)",
        [req.params.id, ID_MEDICAMENTOS, DOSIS_FALTANTES, FRECUENCIA_APLICACION, ULTIMA_DOSIS_APLICADA]
    );
    console.log(result);
    res.json({
        ID_MASCOTAS,
        ID_MEDICAMENTOS,
        DOSIS_FALTANTES,
        FRECUENCIA_APLICACION,
        ULTIMA_DOSIS_APLICADA
    });
};

export const actualizar_Medicamento_Mascota = async (req, res) => {
    const result = await pool.query(
        "UPDATE medicamentos_recetados SET ? WHERE ID_MASCOTA = ?",
        [req.body, req.params.id]
    );
    res.json(result);
};

export const eliminar_Mascota_Medicada = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM medicamentos_recetados WHERE NOMBRE_ESPECIE = ?",
        [req.params.id]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Mascota medicada no encontrada" });
    }
    else {
        return res.json({ message: "Medicación de mascota eliminada" });
    }
};

export const eliminar_Medicamento_Recetado = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM medicamentos_recetados WHERE NOMBRE_ESPECIE = ? AND ID_MEDICAMENTOS",
        [req.params.id, req.params.idMedicamento]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "No se encontró el medicamento recetado para la mascota" });
    }
    else {
        return res.json({ message: "Medicamento recetado a la mascota eliminado" });
    }
};
