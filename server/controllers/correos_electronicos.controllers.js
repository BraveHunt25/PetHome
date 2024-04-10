/*
STATUS: Por probar 05/04/2024 18:35
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'correos_electronicos' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Correos_Clientes = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM correos_electronicos ORDER BY CURP"
    );
    res.json(result);
};

export const obtener_Correos_Cliente = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM correos_electronicos WHERE CURP = ?",
        [req.params.curp]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "No se han encontrado correos para este curp" });
    }

    res.json(result[0]);
};

export const agregar_Correo_Cliente = async (req, res) => {
    const { CURP, CORREO_ELECTRONICO } = req.body;
    const [result] = await pool.query(
        "INSERT INTO correos_electronicos(CURP, CORREO_ELECTRONICO) VALUES (?, ?)",
        [CURP, CORREO_ELECTRONICO]
    );
    console.log(result);
    res.json({
        CURP,
        CORREO_ELECTRONICO
    });
};

export const actualizar_Correo_Cliente = async (req, res) => {
    const result = await pool.query(
        "UPDATE correos_electronicos SET ? WHERE CURP = ? AND CORREO_ELECTRONICO = ?",
        [req.body, req.params.curp, req.params.correo]
    );
    res.json(result);
};

export const eliminar_Correo_Cliente = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM correos_electronicos WHERE CURP = ? AND CORREO_ELECTRONICO = ?",
        [req.params.curp, req.params.correo]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Correo no encontrado para este CURP" });
    }
    else {
        return res.json({ message: "Correo electrónico eliminado" });
    }
};

export const eliminar_Correos_Cliente = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM correos_electronicos WHERE CURP = ?",
        [req.params.curp]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "CURP no encontrado" });
    }
    else {
        return res.json({ message: "Correos electrónicos relacionados al CURP eliminados" });
    }
};