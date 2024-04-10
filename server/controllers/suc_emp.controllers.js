/*
STATUS: Por probar 05/04/2024 21:17
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'suc_emp' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Empleados_Sucursal = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM suc_emp WHERE ID_SUCURSAL = ? ORDER BY ID_EMPLEADO;",
        [ req.params.sucursal ]
    );
    res.json(result);
};

export const agregar_Empleado_Sucursal = async(req, res) => {
    const { ID_EMPLEADO } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO suc_emp(ID_SUCURSAL, ID_EMPLEADO) VALUES (?, ?)",
        [ req.params.sucursal, ID_EMPLEADO ]
    );
    console.log(result);
    res.json({
        ID_EMPLEADO
    });
};

export const actualizar_Empleado_Sucursal = async (req, res) => {
    const result = await pool.query(
        "UPDATE suc_emp SET ? WHERE ID_SUCURSAL = ? AND ID_EMPLEADO = ?",
        [ req.body, req.params.sucursal, req.params.id ]
    );
    res.json(result);
};

export const eliminar_Empleado_Sucursal = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM suc_emp WHERE ID_SUCURSAL = ? AND ID_EMPLEADO = ?",
        [ req.params.sucursal, req.params.id ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Empleado no encontrado en la sucursal"});
    }
    else{
        return res.json({ message: "Empleado eliminado de la sucursal"});
    }
};