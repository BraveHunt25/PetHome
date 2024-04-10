import { Link }from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <h1>PetHome: Hotel de mascotas</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/RegistrarEspecie">Formulario para agregar una especie</Link>
                </li>
                <li>
                    <Link to="/RegistrarRaza">Formulario para agregar una raza</Link>
                </li>
                <li>
                    <Link to="/RegistrarMascota">Formulario para agregar una mascota</Link>
                </li>
                <li>
                    <Link to="/ConsultarMascotas">Consultar mascotas registradas</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar