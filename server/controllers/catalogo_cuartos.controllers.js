/*
STATUS: Por probar 05/04/2024 19:49
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'catalogo_cuartos' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Catalogo_Cuartos = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM catalogo_cuartos ORDER BY ID_TIPO_CUARTO"
    );
    res.json(result);
};

export const agregar_Cuarto_Catalogo_Cuartos = async(req, res) => {
    const { NOMBRE_CUARTO, TAMANO, PRECIO_CUARTO } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO catalogo_cuartos(NOMBRE_CUARTO, TAMANO, PRECIO_CUARTO) VALUES (?, ?, ?)",
        [ NOMBRE_CUARTO, TAMANO, PRECIO_CUARTO ]
    );
    console.log(result);
    res.json({
        NOMBRE_CUARTO, 
        TAMANO, 
        PRECIO_CUARTO
    });
};

export const actualizar_Cuarto_Catalogo_Cuartos = async (req, res) => {
    const result = await pool.query(
        "UPDATE catalogo_cuartos SET ? WHERE ID_TIPO_CUARTO = ?",
        [ req.body, req.params.idTipo ]
    );
    res.json(result);
};

export const eliminar_Cuarto_Catalogo_Cuartos = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM catalogo_cuartos WHERE ID_TIPO_CUARTO = ?",
        [ req.params.idTipo ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Tipo de cuarto no encontrado"});
    }
    else{
        return res.json({ message: "Tipo de cuarto eliminado"});
    }
};