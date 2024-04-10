/*
STATUS: Funcional 04/04/2024 15:53
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'especies' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Especies = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM especies ORDER BY NOMBRE_ESPECIE"
    );
    res.json(result);
};

export const obtener_Solo_Especies = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT NOMBRE_ESPECIE FROM especies ORDER BY NOMBRE_ESPECIE"
    );
    res.json(result);
};

export const obtener_Especie = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM especies WHERE NOMBRE_ESPECIE = ?",
        [ req.params.especie ]
    );
    
    if(result.length === 0){
        return res.status(404).json({ message: "Especie no encontrada"});
    }

    res.json(result[0]);
};

export const agregar_Especie = async(req, res) => {
    const { NOMBRE_ESPECIE, DESCRIPCION } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO especies(NOMBRE_ESPECIE, DESCRIPCION) VALUES (?, ?)",
        [NOMBRE_ESPECIE, DESCRIPCION]
    );
    console.log(result);
    res.json({
        NOMBRE_ESPECIE, 
        DESCRIPCION
    });
};
export const actualizar_Especie = async (req, res) => {
    const result = await pool.query(
        "UPDATE especies SET ? WHERE NOMBRE_ESPECIE = ?",
        [ req.body, req.params.especie ]
    );
    res.json(result);
};
export const eliminar_Especie = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM especies WHERE NOMBRE_ESPECIE = ?",
        [ req.params.especie ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Especie no encontrada"});
    }
    else{
        return res.json({ message: "Especie eliminada"});
    }
};