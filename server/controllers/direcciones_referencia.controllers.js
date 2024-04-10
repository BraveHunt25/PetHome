/*
STATUS: Por probar 05/04/2024 18:59
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'direcciones_referencia' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Direcciones_Clientes = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM direcciones_referencia ORDER BY CURP"
    );
    res.json(result);
};

export const obtener_Direcciones_Cliente = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM direcciones_referencia WHERE CURP = ?",
        [req.params.curp]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "No se han encontrado direcciones para este curp" });
    }

    res.json(result[0]);
};

export const agregar_Direccion_Cliente = async (req, res) => {
    const { CURP, CALLE, NUMERO_EXTERIOR, NUMERO_INTERIOR, COLONIA, CODIGO_POSTAL, MUNICIPIO_ALCALDIA, ESTADO } = req.body;
    const [result] = await pool.query(
        "INSERT INTO direcciones_referencia(CURP, CALLE, NUMERO_EXTERIOR, NUMERO_INTERIOR, COLONIA, CODIGO_POSTAL, MUNICIPIO_ALCALDIA, ESTADO) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [CURP, CALLE, NUMERO_EXTERIOR, NUMERO_INTERIOR, COLONIA, CODIGO_POSTAL, MUNICIPIO_ALCALDIA, ESTADO]
    );
    console.log(result);
    res.json({
        CURP,
        CALLE,
        NUMERO_EXTERIOR,
        NUMERO_INTERIOR,
        COLONIA,
        CODIGO_POSTAL,
        MUNICIPIO_ALCALDIA,
        ESTADO
    });
};

export const actualizar_Direccion_Cliente = async (req, res) => {
    const result = await pool.query(
        "UPDATE direcciones_referencia SET ? WHERE CURP = ? AND CALLE = ?",
        [req.body, req.params.curp, req.params.calle]
    );
    res.json(result);
};

export const eliminar_Direccion_Cliente = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM direcciones_referencia WHERE CURP = ? AND CALLE = ?",
        [req.params.curp, req.params.calle]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Direccion no encontrada para este CURP" });
    }
    else {
        return res.json({ message: "Dirección eliminada" });
    }
};

export const eliminar_Direcciones_Cliente = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM direcciones_referencia WHERE CURP = ?",
        [req.params.curp]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "CURP no encontrado" });
    }
    else {
        return res.json({ message: "Direcciones relacionadas al CURP eliminadas" });
    }
};