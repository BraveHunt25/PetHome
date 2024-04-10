/*
STATUS: Por probar 05/04/2024 18:23
En este archivo se colocan las funciones que hará la página para Consultar, Registrar,
Actualizar y Eliminar algún elemento de la tabla 'numeros_telefonicos' o la tabla misma
existente en nuestra base de datos.
Estas funciones serán invocadas en las rutas 'task.routes'.
*/
import { pool } from "../db.js"

export const obtener_Numeros_Clientes = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM numeros_telefonicos ORDER BY CURP"
    );
    res.json(result);
};

export const obtener_Numeros_Cliente = async (req, res) => {
    const [ result ] = await pool.query(
        "SELECT * FROM numeros_telefonicos WHERE CURP = ?",
        [ req.params.curp ]
    );
    
    if(result.length === 0){
        return res.status(404).json({ message: "No se han encontrado números para este curp"});
    }

    res.json(result[0]);
};

export const agregar_Numero_Cliente = async(req, res) => {
    const { CURP, NUMERO_TELEFONICO } = req.body;
    const [ result ] = await pool.query(
        "INSERT INTO numeros_telefonicos(CURP, NUMERO_TELEFONICO) VALUES (?, ?)",
        [ CURP, NUMERO_TELEFONICO ]
    );
    console.log(result);
    res.json({
        CURP, 
        NUMERO_TELEFONICO
    });
};

export const actualizar_Numero_Cliente = async (req, res) => {
    const result = await pool.query(
        "UPDATE numeros_telefonicos SET ? WHERE CURP = ? AND NUMERO_TELEFONICO = ?",
        [ req.body, req.params.curp, req.params.numero ]
    );
    res.json(result);
};

export const eliminar_Numero_Cliente = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM numeros_telefonicos WHERE CURP = ? AND NUMERO_TELEFONICO = ?",
        [ req.params.curp, req.params.numero ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "Número no encontrado para este CURP"});
    }
    else{
        return res.json({ message: "Número eliminado"});
    }
};

export const eliminar_Numeros_Cliente = async (req, res) => {
    const [ result ] = await pool.query(
        "DELETE FROM numeros_telefonicos WHERE CURP = ?",
        [ req.params.curp ]
    );

    if(result.affectedRows === 0){
        return res.status(204).json({ message: "CURP no encontrado"});
    }
    else{
        return res.json({ message: "Números relacionado al CURP eliminados"});
    }
};