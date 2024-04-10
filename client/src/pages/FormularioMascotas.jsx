/*
 * STATUS: Por depurar 09/04/2024
 * Este archivo incluye el formulario con el que se reciben los datos para ingresar un nuevo registro
 * a la tabla de 'mascotas' 
 * NOTE: De ser posible, evitar usar directamente los routers aquí
 * SUGGESTION: Importar las rutas en vez de hacerlo in situ
 */
import { Form, Formik, Field } from 'formik';
import React, { useState, useEffect } from 'react';
//Importa la función para hacer solicitar una inserción al backend desde el frontend
import { solicitudCrearMascota } from '../api/mascotas.api'; 
import { solcitudConsultarSoloRazas } from '../api/razas.api';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FormularioMascotas() {
    const [razas, setRazas] = useState([]);

    useEffect(() => {
        const fetchRazas = async () => {
            try {
                const response = await axios.get('http://localhost:3000/razas/porRaza');
                setRazas(response.data);
            } catch (error) {
                console.error('Error fetching razas:', error);
            }
        };

        fetchRazas();
    }, []);

    return (
        <div>
            <Formik
                initialValues = {{
                    NOMBRE_RAZA: "",
                    NOMBRE_MASCOTA: "",
                    TAMANO: "Pequeño",
                    FECHA_NACIMIENTO: new Date(),
                    COLOR: ""
                }}
                onSubmit = {async (values, actions) => {
                    console.log(values)
                    try {
                        const response = await solicitudCrearMascota(values)   
                        console.log(response)
                        actions.resetForm()
                    } catch (error) {
                        console.error(error)
                    }
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting, handleBlur }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Nombre de la raza</label>
                        <Field as="select" name="NOMBRE_RAZA" onChange={handleChange} value={values.NOMBRE_RAZA}>
                            <option value="">Selecciona una raza</option>
                            {razas.map(raza => (
                                <option key={raza.NOMBRE_RAZA} value={raza.NOMBRE_RAZA}>{raza.NOMBRE_RAZA}</option>
                            ))}
                        </Field>
                        <label>¿No encuentras la raza que buscas?</label>
                        <label>Ingresa <Link to="/RegistrarRaza">aquí</Link> para registrar una nueva Raza</label>

                        <label>Nombre de la mascota</label>
                        <input 
                            type='text' 
                            name='NOMBRE_MASCOTA' 
                            placeholder='Escribe el nombre de la mascota'
                            onChange={handleChange}
                            value={values.NOMBRE_MASCOTA}
                        />

                        <label>Tamaño de la mascota</label>
                        <select
                            name='TAMANO'
                            value={values.TAMANO}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{display: 'block'}}
                        >
                            <option 
                                value=""
                                label='Selecciona un tamaño'>
                                Selecciona un tamaño{""}
                            </option>
                            <option 
                                value="Pequeño"
                                label='Pequeño'>
                                Pequeño
                            </option>
                            <option 
                                value="Mediano"
                                label='Mediano'>
                                Mediano
                            </option>
                            <option 
                                value="Grande"
                                label='Grande'>
                                Grande
                            </option>
                        </select>

                        <label>Fecha de nacimiento</label>
                        <input 
                            type="date" 
                            name="FECHA_NACIMIENTO"
                            onChange={handleChange}
                            value={values.FECHA_NACIMIENTO
                        }/>

                        <input 
                            type='text' 
                            name='COLOR' 
                            placeholder='Escribe el o los colores de la mascota'
                            onChange={handleChange}
                            value={values.COLOR}
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

export default FormularioMascotas