/*
STATUS: Por probar 04/04/2024 22:52
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'razas' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Razas = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM razas ORDER BY NOMBRE_RAZA"
    );
    res.json(result);
};

export const obtener_Solo_Razas = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT NOMBRE_RAZA from razas ORDER BY NOMBRE_RAZA"
    );
    res.json(result);
}

export const obtener_Razas_Por_Especie = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM razas WHERE NOMBRE_ESPECIE = ?",
        [ req.params.raza ]
    );
    
    if(result.length === 0){
        return res.status(404).json({ message: "Raza no encontrada"});
    }

    res.json(result[0]);
};

export const agregar_Raza = async(req, res) => {
    const { NOMBRE_RAZA, NOMBRE_ESPECIE } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO razas(NOMBRE_RAZA, NOMBRE_ESPECIE) VALUES (?, ?)",
        [NOMBRE_RAZA, NOMBRE_ESPECIE]
    );
    console.log(result);
    res.json({
        NOMBRE_RAZA, 
        NOMBRE_ESPECIE
    });
};

export const actualizar_Raza = async (req, res) => {
    const result = await pool.query(
        "UPDATE razas SET ? WHERE NOMBRE_RAZA = ?",
        [ req.body, req.params.raza ]
    );
    res.json(result);
};

export const eliminar_Raza = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM razas WHERE NOMBRE_RAZA = ?",
        [ req.params.raza ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Raza no encontrada"});
    }
    else{
        return res.json({ message: "Raza eliminada"});
    }
};