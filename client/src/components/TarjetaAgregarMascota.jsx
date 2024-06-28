import React from 'react';
import Cesto from '../assets/TrashCanIcon.png'
import Cruz from '../assets/AgregarIcon.png'

const TarjetaAgregarMascota = ({ data }) => {
  return (
    <div className='Tarjeta'>
      <div className='Especie'>
        <h4>Especie: {data.especie}</h4>
      </div>
      <div className='Raza'>
        <p>Raza: {data.raza}</p>
      </div>
      <div className='Icono'>
        <input type='image' className='Cesto' src={Cesto} alt="Botón para eliminar mascota de búsqueda" />
      </div>
      <div className='Icono'>
        <input type='image' className='Agregar' src={Cruz} alt="Botón para agendar cita a la mascota del servicio seleccionado" />
      </div>
      <div className='Cuartos'>
        <p>Cuarto: </p>
      </div>
      <div className='Servicios'>
        <p>Servicios: </p>
      </div>
      <hr />
    </div>
  );
};


export default TarjetaAgregarMascota;