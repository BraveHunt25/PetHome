import { NavLink } from 'react-router-dom';
import logo from '../assets/LogoPetHome.png'
import { useEffect, useState, useContext } from 'react';
import { obtenerMenuSucursales } from '../api/FormularioAgregarMascota.api';
import { GeneralContext } from '../context/GeneralContext';


function Header({ onFormChange }) {

    const {valoresReservacion, setValoresReservacion} = useContext(GeneralContext);
    const [opcionesSucursales, setOpcionesSucursales] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el contexto con los nuevos valores
        setValoresReservacion(prevValues => ({
            ...prevValues,
            [name]: value
        }));

        console.log('valoresReservacion actualizados:', {
            ...valoresReservacion,
            [name]: value,
        });
    };

    useEffect(() => {
        async function cargarMenuSucursales() {
            try {
                const response = await obtenerMenuSucursales();
                setOpcionesSucursales(response.data);
            } catch (error) {
                console.error('Error al cargar las sucursales:', error);
            }
        }
        cargarMenuSucursales();
    }, []);

    return (
        <>
            <div className="ContenedorImagen">
                <img src={logo} id="LogoPetHome" alt="LogoPetHome" />
            </div>
            <div id="ContenidoHeader">
                <div className="Titulos">
                    <p className="TituloPrincipal">Pet Home</p>
                    <p className="Subtitulo">Hotel de mascotas</p>
                </div>
                <nav>
                    <form className="Botones">
                        <div className="Dropdown">
                            <select name="sucursal"
                                className="BotonDropdown"
                                id="BotonSucursal"
                                value={valoresReservacion.sucursal}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled hidden>Selecciona la sucursal</option>
                                {opcionesSucursales.map(opcion => (
                                    <option key={opcion.id} value={opcion.sucursal}>
                                        {opcion.sucursal}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="Fecha" id="BotonLlegada">
                            <label htmlFor="Llegada">Llegada</label>
                            <input
                                type="date"
                                id="Llegada"
                                name="llegada"
                                value={valoresReservacion.llegada}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="Fecha" id="BotonSalida">
                            <label htmlFor="Salida">Salida</label>
                            <input
                                type="date"
                                id="Salida"
                                name="salida"
                                value={valoresReservacion.salida}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                    <div className="Progreso">
                        <div className='BotonNav'>
                            <NavLink to="/PaginaPrincipal" >
                                1
                            </NavLink>
                        </div>
                        <div className='BotonNav'>
                            <NavLink to="/CuartosDisponibles" >
                                2
                            </NavLink>
                        </div>
                        <div className='BotonNav'>
                            <NavLink to="/ServiciosDisponibles" >
                                3
                            </NavLink>
                        </div>
                        <div className='BotonNav'>
                            <NavLink to="/ResumenHospedaje" >
                                4
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;