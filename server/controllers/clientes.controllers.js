/*
STATUS: Por probar 05/04/2024 17:37
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'clientes' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Clientes = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM clientes ORDER BY CURP"
    );
    res.json(result);
};

export const obtener_Cliente = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM clientes WHERE CURP = ?",
        [req.params.curp]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "Cliente no encontrado" });
    }

    res.json(result[0]);
};

export const agregar_Cliente = async (req, res) => {
    const { CURP, NOMBRES, PRIMER_APELLIDO, SEGUNDO_APELLIDO } = req.body;
    const [result] = await pool.query(
        "INSERT INTO clientes(CURP, NOMBRES, PRIMER_APELLIDO, SEGUNDO_APELLIDO) VALUES (?, ?, ?, ?)",
        [CURP, NOMBRES, PRIMER_APELLIDO, SEGUNDO_APELLIDO]
    );
    console.log(result);
    res.json({
        CURP,
        NOMBRES,
        PRIMER_APELLIDO,
        SEGUNDO_APELLIDO
    });
};

export const actualizar_Cliente = async (req, res) => {
    const result = await pool.query(
        "UPDATE clientes SET ? WHERE CURP = ?",
        [req.body, req.params.curp]
    );
    res.json(result);
};

export const eliminar_Cliente = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM clientes WHERE CURP = ?",
        [req.params.curp]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Cliente no encontrado" });
    }
    else {
        return res.json({ message: "Cliente eliminado" });
    }
};