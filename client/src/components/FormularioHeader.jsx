import DatePicker from './DatePicker.jsx';
import { Formik, Form, useFormik } from 'formik';
import './FormularioHeader.css'
function FormularioHeader() {

    const formik = useFormik({
        initialValues: {
            sta
        }
    });
    return (
        <div>
            <Formik
            >
                <Form class="FormularioHeader">
                    <div class="Dropdown">
                        <select name="Sucursal" class="BotonDropdown" id="BotonSucursal" required>
                            <option value="" disabled selected>Selecciona la sucursal</option>
                            <option value="Ciudad de México">Ciudad de México</option>
                            <option value="Monterrey">Monterrey</option>
                            <option value="Merida">Mérida</option>
                        </select>
                    </div>
                    <DatePicker />
                </Form>
            </Formik>
        </div>
    )
}

export default FormularioHeader;