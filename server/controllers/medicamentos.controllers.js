/*
STATUS: Por probar 04/04/2024 16:23
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'medicamentos' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Medicamentos = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT NOMBRE_MEDICAMENTO, ID_MEDICAMENTO, REGISTRO, LABORATORIO FROM medicamentos ORDER BY NOMBRE_MEDICAMENTO"
    );
    res.json(result);
};

export const obtener_Medicamento = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT NOMBRE_MEDICAMENTO, ID_MEDICAMENTO, REGISTRO, LABORATORIO FROM medicamentos WHERE ID_MEDICAMENTO = ?",
        [ req.params.id ]
    );
    
    if(result.length === 0){
        return res.status(404).json({ message: "Medicamento no encontrado"});
    }

    res.json(result[0]);
};

export const agregar_Medicamento = async(req, res) => {
    const { ID_MEDICAMENTO, REGISTRO, LABORATORIO, NOMBRE_MEDICAMENTO } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO medicamentos(ID_MEDICAMENTO, REGISTRO, LABORATORIO, NOMBRE_MEDICAMENTO) VALUES (?, ?, ?, ?)",
        [ ID_MEDICAMENTO, REGISTRO, LABORATORIO, NOMBRE_MEDICAMENTO ]
    );
    console.log(result);
    res.json({
        ID_MEDICAMENTO, 
        REGISTRO, 
        LABORATORIO, 
        NOMBRE_MEDICAMENTO
    });
};
export const actualizar_Medicamento = async (req, res) => {
    const result = await pool.query(
        "UPDATE medicamentos SET ? WHERE ID_MEDICAMENTO = ?",
        [ req.body, req.params.id ]
    );
    res.json(result);
};
export const eliminar_Medicamento = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM medicamentos WHERE ID_MEDICAMENTO = ?",
        [ req.params.id ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Medicamento no encontrado"});
    }
    else{
        return res.json({ message: "Medicamento eliminado"});
    }
};