import React, { useState, useEffect } from 'react';
import { obtenerMenuEspecies, obtenerMenuRazas } from '../api/FormularioAgregarMascota.api';

const FormularioAgregarTarjetaMascota = ({ onAddComponent }) => {
    const [especie, setEspecie] = useState('');
    const [raza, setRaza] = useState('');
    const [opcionesEspecie, setOpcionesEspecie] = useState([]);
    const [opcionesRaza, setOpcionesRaza] = useState([]);

    // Cargar opciones de especie al montar el componente
    useEffect(() => {
        async function cargarMenuEspecie() {
            try {
                const response = await obtenerMenuEspecies();
                setOpcionesEspecie(response.data[0]); // Ajusta según la estructura real de tus datos
            } catch (error) {
                console.error('Error al cargar las especies:', error);
            }
        }
        cargarMenuEspecie();
    }, []);

    // Cargar opciones de raza cuando se selecciona una especie
    useEffect(() => {
        async function cargarMenuRazas() {
            if (especie) {
                try {
                    const response = await obtenerMenuRazas(especie);
                    setOpcionesRaza(response.data); // Ajusta según la estructura real de tus datos
                } catch (error) {
                    console.error('Error al cargar las razas:', error);
                }
            } else {
                setOpcionesRaza([]);
            }
        }
        cargarMenuRazas();
    }, [especie]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (especie && raza) {
            onAddComponent({ especie, raza });
            setEspecie('');
            setRaza('');
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <hr />
            <div className="seccion">
                <div className="Dropdown">
                    <select
                        name="Especie"
                        className="BotonDropdown"
                        id="BotonEspecie"
                        value={especie}
                        onChange={(e) => {
                            setEspecie(e.target.value);
                            setRaza('');
                        }}
                        required
                    >
                        <option value="" disabled hidden>Especie</option>
                        {opcionesEspecie.map(opcion => (
                            <option key={opcion.id} value={opcion.especie}>
                                {opcion.especie}
                            </option>
                        ))}
                    </select>
                </div>
                <br />
                <div className="Dropdown">
                    <select
                        name="Raza"
                        className="BotonDropdown"
                        id="BotonRaza"
                        value={raza}
                        onChange={(e) => setRaza(e.target.value)}
                        required
                        disabled={!especie}
                    >
                        <option value="" disabled hidden>Raza</option>
                        {opcionesRaza.map(opcion => (
                            <option key={opcion.id} value={opcion.raza}>
                                {opcion.raza}
                            </option>
                        ))}
                    </select>
                </div>
                <br />
                <div className="Boton">
                    <input type="submit" value="Agregar mascota" />
                </div>
            </div>
        </form>
    );
}

export default FormularioAgregarTarjetaMascota;