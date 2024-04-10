/*
 * Este archivo incluye la aplicación en React con las rutas que verán los clientes.
 * También se incluye la barra de navegación.
 */
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import FormularioMascota from './pages/FormularioMascotas';
import FormularioEspecies from './pages/FormularioEspecies';
import FormularioRazas from './pages/FormularioRazas';
import ConsultaMascotas from './pages/ConsultaMascotas';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/RegistrarEspecie' element={<FormularioEspecies />} />
        <Route path='/RegistrarRaza' element={<FormularioRazas />} />
        <Route path='/RegistrarMascota' element={<FormularioMascota />} />
        <Route path='/ConsultarMascotas' element={<ConsultaMascotas />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App