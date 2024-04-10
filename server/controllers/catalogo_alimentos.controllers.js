/*
STATUS: Funcional 04/04/2024 15:52
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'catalogo_alimentos' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"
export const obtener_Catalogo_Alimentos = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT NOMBRE_ALIMENTO, DESCRIPCION_ALIMENTO FROM catalogo_alimentos ORDER BY NOMBRE_ALIMENTO"
    );
    res.json(result);
};
export const obtener_Alimento = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT NOMBRE_ALIMENTO, DESCRIPCION_ALIMENTO FROM catalogo_alimentos WHERE ID_ALIMENTOS = ?",
        [ req.params.id ]
    );
    
    if(result.length === 0){
        return res.status(404).json({ message: "Alimento no encontrado"});
    }

    res.json(result[0]);
};
export const agregar_Alimento = async(req, res) => {
    const { NOMBRE_ALIMENTO, DESCRIPCION_ALIMENTO } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO catalogo_alimentos(NOMBRE_ALIMENTO, DESCRIPCION_ALIMENTO) VALUES (?, ?)",
        [NOMBRE_ALIMENTO, DESCRIPCION_ALIMENTO]
    );
    console.log(result);
    res.json({
        id: result.insertId,
        NOMBRE_ALIMENTO,
        DESCRIPCION_ALIMENTO
    });
};
export const actualizar_Alimento = async (req, res) => {
    const result = await pool.query(
        "UPDATE catalogo_alimentos SET ? WHERE ID_ALIMENTOS = ?",
        [ req.body, req.params.id ]
    );
    res.json(result);
};
export const eliminar_Alimento = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM catalogo_alimentos WHERE ID_ALIMENTOS = ?",
        [ req.params.id ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Alimento no encontrado"});
    }
    else{
        return res.json({ message: "Alimento eliminado"});
    }
};