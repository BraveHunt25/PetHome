/*
STATUS: Por probar 05/04/2024 21:44
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'cuartos' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Todos_Cuartos = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM cuartos ORDER BY ID_SUCURSAL"
    );
    res.json(result);
};

export const obtener_Cuartos_Sucursal = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM cuartos WHERE ID_SUCURSAL = ?",
        [ req.params.sucursal ]
    );
    
    if(result.length === 0){
        return res.status(404).json({ message: "Cuartos para esta sucursal no encontrados"});
    }

    res.json(result[0]);
};

export const obtener_Cuartos_Sucursal_Tipo = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM cuartos WHERE ID_SUCURSAL = ? AND ID_TIPO_CUARTO = ?",
        [ req.params.sucursal, req.params.id ]
    );
    
    if(result.length === 0){
        return res.status(404).json({ message: "Cuartos de este tipo en la sucursal no encontrados"});
    }

    res.json(result[0]);
};

export const agregar_Cuarto_Sucursal = async(req, res) => {
    const { ID_TIPO_CUARTO, ID_SUCURSAL, NUMERO_CUARTO } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO cuartos(ID_TIPO_CUARTO, ID_SUCURSAL, NUMERO_CUARTO) VALUES (?, ?, ?)",
        [ ID_TIPO_CUARTO, ID_SUCURSAL, NUMERO_CUARTO ]
    );
    console.log(result);
    res.json({
        ID_TIPO_CUARTO, 
        ID_SUCURSAL, 
        NUMERO_CUARTO
    });
};

export const actualizar_Cuarto_Sucursal = async (req, res) => {
    const result = await pool.query(
        "UPDATE cuartos SET ? WHERE ID_SUCURSAL = ? AND ID_CUARTO = ?",
        [ req.body, req.params.sucursal, req.params.id ]
    );
    res.json(result);
};

export const eliminar_Cuarto_Sucursal = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM cuartos WHERE ID_SUCURSAL = ? AND ID_CUARTO = ?",
        [ req.params.sucursal.id ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Cuarto en la sucursal no encontrado"});
    }
    else{
        return res.json({ message: "Cuarto en la sucursal eliminado"});
    }
};