/*
STATUS: Por probar 06/04/2024 18:42
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'hospedaje' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Todos_Hospedajes = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM hospedaje ORDER BY ID_HOSPEDAJE"
    );
    res.json(result);
};

export const obtener_Hospedajes_Sucursal = async (req, res) => {
    const [result] = await pool.query(
        "SELECT h.ID_HOSPEDAJE, h.ID_RESERVACION, c.NUMERO_CUARTO, c.ID_SUCURSAL FROM hospedaje h RIGHT OUTER JOIN cuartos c ON h.ID_CUARTO = c.ID_CUARTO WHERE c.ID_SUCURSAL = ?",
        [req.params.sucursal]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "Hospedajes para esta sucursal no encontrados" });
    }

    res.json(result[0]);
};

export const obtener_Hospedaje_Sucursal = async (req, res) => {
    const [result] = await pool.query(
        "SELECT h.ID_HOSPEDAJE, h.ID_RESERVACION, c.NUMERO_CUARTO, c.ID_CUARTO, h.CHECK_IN, h.CHECK_OUT, h.TOTAL_SERVICIOS, h.TOTAL_CUARTO, h.CORTE, h.EQUIPAJE_TRANSPORTE FROM hospedaje h RIGHT OUTER JOIN cuartos c ON h.ID_CUARTO = c.ID_CUARTO WHERE c.ID_SUCURSAL = ? AND h.ID_HOSPEDAJE = ?",
        [req.params.sucursal, req.params.id]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "Hospedaje en la sucursal no encontrado" });
    }

    res.json(result[0]);
};

export const agregar_Hospedaje_Sucursal = async (req, res) => {
    const { ID_RESERVACION, ID_CUARTO, CHECK_IN, CHECK_OUT, TOTAL_SERVICIOS, TOTAL_CUARTO, CORTE, EQUIPAJE_TRANSPORTE } = req.body;
    const [result] = await pool.query(
        "INSERT INTO hospedaje(ID_RESERVACION, ID_CUARTO, CHECK_IN, CHECK_OUT, TOTAL_SERVICIOS, TOTAL_CUARTO, CORTE, EQUIPAJE_TRANSPORTE) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [ID_RESERVACION, ID_CUARTO, CHECK_IN, CHECK_OUT, TOTAL_SERVICIOS, TOTAL_CUARTO, CORTE, EQUIPAJE_TRANSPORTE]
    );
    console.log(result);
    res.json({
        ID_RESERVACION,
        ID_CUARTO,
        CHECK_IN,
        CHECK_OUT,
        TOTAL_SERVICIOS,
        TOTAL_CUARTO,
        CORTE,
        EQUIPAJE_TRANSPORTE
    });
};

export const actualizar_Hospedaje_Sucursal = async (req, res) => {
    const result = await pool.query(
        "UPDATE hospedaje SET ? WHERE ID_SUCURSAL = ? AND ID_HOSPEDAJE = ?",
        [req.body, req.params.sucursal, req.params.id]
    );
    res.json(result);
};

export const eliminar_Hospedaje_Sucursal = async (req, res) => {
    const [result] = await pool.query(
        "DELETE FROM hospedaje WHERE ID_SUCURSAL = ? AND ID_HOSPEDAJE = ?",
        [req.params.sucursal, req.params.id]
    );

    if (result.affectedRows === 0) {
        return res.status(204).json({ message: "Hospedaje en la sucursal no encontrado" });
    }
    else {
        return res.json({ message: "Hospedaje en la sucursal eliminado" });
    }
};