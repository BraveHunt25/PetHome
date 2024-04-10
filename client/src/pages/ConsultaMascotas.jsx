import { useEffect, useState } from 'react';
import { solicitudConsultarMascotas } from '../api/mascotas.api';
import TarjetaMascota from '../components/ElementoMascotas';

function ConsultarMascotas() {
    const [mascotas, setMascotas] = useState([])

    useEffect(() => {
        async function cargarMascotas() {
            const response = await solicitudConsultarMascotas()
            setMascotas(response.data)
        }
        cargarMascotas()
    }, [])

    function renderMain() {
        if (mascotas.length == 0) return <h2>No se han registrado mascotas aún</h2>
        return mascotas.map(mascota => (<TarjetaMascota mascota={mascota} key={mascota.ID_MASCOTA} />))
    }

    return (
        <div>
            <h1>Mascotas registradas</h1>
            {renderMain()}
        </div>
    );
}

export default ConsultarMascotas