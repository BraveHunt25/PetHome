import { GeneralContext, GeneralContextProvider } from "./context/GeneralContext";
import { NavLink } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import DetallesCuarto from "./components/DetallesCuarto";
import DetallesServicio from "./components/DetallesServicio";
import Header from "./components/HeaderNav";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound"
import PadreAgregarMascota from "./components/PadreAgregarMascota";
import PaginaPrincipal from "./components/PaginaPrincipal";
import ReservarCuarto from "./components/ReservarCuarto";
import ReservarServicio from "./components/ReservarServicio";
import ResumenHospedaje from "./components/ResumenHospedaje";
import './App.css';
import Login from "./components/login";

function App() {

    const handleFormChange = (name, value) => {
        setValoresReservacion(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <GeneralContextProvider>
            <header>
                <Header onFormChange={handleFormChange} />
            </header>
            <aside>
                <PadreAgregarMascota />
                <hr />
                <NavLink to="/CuartosDisponibles" className="Boton" id="submit">
                    Buscar cuartos
                </NavLink>
                <br />
                <br />
            </aside>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/PaginaPrincipal" element={<PaginaPrincipal />} />
                    <Route path="/CuartosDisponibles">
                        <Route index element={<ReservarCuarto />} />
                        <Route path=":idCuarto" element={<DetallesCuarto />} />
                    </Route>
                    <Route path="/ServiciosDisponibles">
                        <Route index element={<ReservarServicio />} />
                        <Route path=":idServicio" element={<DetallesServicio />} />
                    </Route>
                    <Route path="/ResumenHospedaje" element={<ResumenHospedaje />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <p><i className="fas fa-phone-alt"></i> Contactanos: +1 (555) 123-4567</p>
                    <div className="social-media">
                        <Link to="https://www.facebook.com/profile.php?id=61560565757485&is_tour_dismissed" target="_blank"><i className="fab fa-facebook-f"></i> Facebook</Link> |
                        <Link to="https://x.com/PetHomeOficial" target="_blank"><i className="fab fa-twitter"></i> Twitter</Link> |
                        <Link to="https://www.instagram.com/pethomeog/" target="_blank"><i className="fab fa-instagram"></i> Instagram</Link> |
                        <Link to="https://www.linkedin.com/company/PetHome" target="_blank"><i className="fab fa-linkedin-in"></i> LinkedIn</Link>
                    </div>
                </div>
            </footer>
        </GeneralContextProvider>
    )
}

export default App;