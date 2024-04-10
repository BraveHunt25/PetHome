/*
 * STATUS: Por depurar 09/04/2024
 * Este archivo incluye el formulario con el que se reciben los datos para ingresar un nuevo registro
 * a la tabla de 'razas' 
 * NOTE: De ser posible, evitar usar directamente los routers aquí
 * SUGGESTION: Importar las rutas en vez de hacerlo in situ
 */
import { Form, Formik, Field } from 'formik';
//Importa la función para hacer solicitar una inserción al backend desde el frontend
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { solicitudCrearRaza } from '../api/razas.api'; 

function FormularioRazas() {
    const [especies, setEspecies] = useState([]);

    useEffect(() => {
        const fetchEspecies = async () => {
            try {
                const response = await axios.get('http://localhost:3000/especies/porEspecie');
                setEspecies(response.data);
            } catch (error) {
                console.error('Error fetching razas:', error);
            }
        };

        fetchEspecies();
    }, []);
    
    return (
        <div>
            <Formik
                initialValues = {{
                    NOMBRE_RAZA: "",
                    NOMBRE_ESPECIE: ""
                }}
                onSubmit = {async (values, actions) => {
                    console.log(values)
                    try {
                        const response = await solicitudCrearRaza(values)   
                        console.log(response)
                        actions.resetForm()
                    } catch (error) {
                        console.error(error)
                    }
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Especie a la que pertenece</label>
                        <Field as="select" name="NOMBRE_ESPECIE" onChange={handleChange} value={values.NOMBRE_ESPECIE}>
                            <option value="">Selecciona una especie</option>
                            {especies.map(especie => (
                                <option key={especie.NOMBRE_ESPECIE} value={especie.NOMBRE_ESPECIE}>{especie.NOMBRE_ESPECIE}</option>
                            ))}
                        </Field>
                        <label>¿No encuentras la especie que buscas?</label>
                        <label>Ingresa <Link to="/RegistrarEspecie">aquí</Link> para agregar una nueva Especie</label>
                        
                        <label>Nombre de la raza</label>
                        <input 
                            type='text' 
                            name='NOMBRE_RAZA' 
                            placeholder='Escribe el nombre de la raza'
                            onChange={handleChange}
                            value={values.NOMBRE_RAZA}
                        />

                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting ? "Guardando..." : "Guardar"}    
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormularioRazas