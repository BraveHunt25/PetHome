import React, { useState } from 'react';
import FormularioTarjetaMascota from './FormularioTarjetaMascota';
import TarjetaAgregarMascota from './TarjetaAgregarMascota';

const PadreAgregarMascota = () => {
  const [components, setComponents] = useState([]);
  const [razasUnicas, setRazasUnicas] = useState([]);

  const addComponent = (data) => {
    setComponents([...components, data]);
    if (!razasUnicas.includes(data.raza)) {
      setRazasUnicas([...razasUnicas, data.raza]);
    }
  };

  return (
    <div>
      <FormularioTarjetaMascota onAddComponent={addComponent} />
      <div>
        {components.map((data, index) => (
          <TarjetaAgregarMascota key={index} data={data} />
        ))}
      </div>
      <div>
        <h3>Razas únicas agregadas:</h3>
        <ul>
          {razasUnicas.map((raza, index) => (
            <li key={index}>{raza}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PadreAgregarMascota;