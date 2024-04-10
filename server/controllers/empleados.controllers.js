/*
STATUS: Por probar 05/04/2024 21:08
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'empleados' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Empleados = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM empleados ORDER BY ID_EMPLEADO"
    );
    res.json(result);
};

export const agregar_Empleado = async (req, res) => {
    const { NOMBRES, PRIMER_APELLIDO, SEGUNDO_APELLIDO, NUMERO_CONTACTO } = req.body;
    const [result] = await pool.query(
        "INSERT INTO empleados(NOMBRES, PRIMER_APELLIDO, SEGUNDO_APELLIDO, NUMERO_CONTACTO) VALUES (?, ?, ?, ?)",
        [NOMBRES, PRIMER_APELLIDO, SEGUNDO_APELLIDO, NUMERO_CONTACTO]
    );
    console.log(result);
    res.json({
        NOMBRES,
        PRIMER_APELLIDO,
        SEGUNDO_APELLIDO,
        NUMERO_CONTACTO
    });
};

export const actualizar_Empleado = async (req, res) => {
    const result = await pool.query(
        "UPDATE empleados SET ? WHERE ID_EMPLEADO = ?",
        [req.body, req.params.id]
    );
    res.json(result);
};

export const eliminar_Empleado = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM empleados WHERE ID_EMPLEADO = ?",
        [req.params.id]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Empleado no encontrado" });
    }
    else {
        return res.json({ message: "Empleado eliminado" });
    }
};