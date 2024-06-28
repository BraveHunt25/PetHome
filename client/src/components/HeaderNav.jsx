import { NavLink } from 'react-router-dom';
import logo from '../assets/LogoPetHome.png'


function Header({ onFormChange, valoresReservacion }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFormChange(name, value);
    };

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
                                <option value="" disabled>Selecciona la sucursal</option>
                                <option value="Ciudad de Mexico">Ciudad de México</option>
                                <option value="Monterrey">Monterrey</option>
                                <option value="Merida">Mérida</option>
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