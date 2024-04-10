import { solicitudEliminarMascota } from '../api/mascotas.api.js';

function TarjetaMascota({ mascota }) {
    const handleDelete = async (idMascota) => {
        try {
            const response = await solicitudEliminarMascota(idMascota);
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h2>{mascota.NOMBRE_MASCOTA}</h2>
            <h3>ID de la mascota: {mascota.ID_MASCOTA}</h3>
            <h4>Raza: {mascota.NOMBRE_RAZA}</h4>
            <h4>{mascota.COLOR}</h4>
            <h4>{mascota.TAMANO}</h4>
            <h4>{mascota.FECHA_NACIMIENTO}</h4>
            <button>Editar</button>
            <button onClick={() => handleDelete(mascota.ID_MASCOTA)}>Eliminar</button>
        </div>
    );
}

export default TarjetaMascota;