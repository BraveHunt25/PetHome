/*
 * STATUS: Por depurar 09/04/2024
 * Este archivo incluye el formulario con el que se reciben los datos para ingresar un nuevo registro
 * a la tabla de 'especies' 
 */
import { Form, Formik } from 'formik';
//Importa la función para hacer solicitar una inserción al backend desde el frontend
import { solicitudCrearEspecie } from '../api/especies.api';

function FormularioEspecies() {
    return (
        <div>
            <Formik
                initialValues={{
                    NOMBRE_ESPECIE: "",
                    DESCRIPCION: ""
                }}
                onSubmit={async (values, actions) => {
                    console.log(values)
                    try {
                        const response = await solicitudCrearEspecie(values)
                        console.log(response)
                        actions.resetForm()
                    } catch (error) {
                        console.error(error)
                    }
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Nombre de la especie</label>
                        <input
                            type='text'
                            name='NOMBRE_ESPECIE'
                            placeholder='Escribe el nombre de la especie'
                            onChange={handleChange}
                            value={values.NOMBRE_ESPECIE}
                        />

                        <label>Descripción</label>
                        <textarea
                            name='DESCRIPCION'
                            rows='3'
                            placeholder='(Opcional) Escribe una descripción de la especie'
                            onChange={handleChange}
                            value={values.DESCRIPCION}
                        ></textarea>

                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting ? "Guardando..." : "Guardar"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormularioEspecies