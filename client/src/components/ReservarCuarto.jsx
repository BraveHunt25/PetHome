import CuartoClassic from '../assets/CuartoClassic.jpg';
import CuartoNature from '../assets/CuartoNature.jpg';
import CuartoNostalgia from '../assets/CuartoEnsueño.jpg';
import IconAireLibre from '../assets/AireLibreIcon.png';
import IconTermometro from '../assets/TermometroIcon.png';
import IconSupervision from '../assets/SupervisionIcon.png';
import IconMusica from '../assets/MusicaIcon.png';
import './ReservarCuarto.css'
import { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import { obtenerCatalogoCuartos } from '../api/FormularioAgregarMascota.api';

function ReservarCuarto() {

    const { valoresReservacion, setValoresReservacion } = useContext(GeneralContext);
    const [catalogoCuartos, setCatalogoCuartos] = useState([]);

    useEffect(() => {
        async function cargarCuartos() {
            try {
                const response = await obtenerCatalogoCuartos(valoresReservacion.sucursal);
                setCatalogoCuartos(response.data);
            } catch (error) {
                console.error('Error al cargar las sucursales:', error);
            }
        }
        cargarCuartos();
        console.log({
            ...catalogoCuartos
        })
    }, [])

    return (
        <div className="Contenido">
            <div className="TarjetaCuarto">
                {catalogoCuartos.map(cuarto => (
                    <div className="CabeceraTarjeta" id={cuarto}>
                        <div className="ContenedorImagen">
                            <img src={CuartoNature} alt='Foto de cuarto' className="FotoCuarto" />
                        </div>
                        <div className="ContenedorCaracteristicas">
                            <div className="NombreCuarto">
                                <p>Cuarto {cuarto.nombre_cuarto}</p>
                            </div>
                            <div className="IconosCaracteristicas">
                                <img src={IconAireLibre} alt="Icono Aire Libre" className="Icono" />
                                <img src={IconTermometro} alt="Icono TermometroIcon" className="Icono" />
                                <img src={IconSupervision} alt="Icono Supervision" className="Icono" />
                            </div>
                        </div>
                        <div className="ContenedorPrecios">
                            <p className="PrecioBase">${cuarto.precio}</p>
                            <p className="PorNoche">Por noche</p>
                            <p className="Total">${cuarto.precio * 4} por 4 noches</p>
                        </div>
                    </div>
                ))}
                <div className="DescripcionCuarto">
                    <p>
                        En nuestro exclusivo hotel de mascotas, ofrecemos un cuarto de descanso al aire libre diseñado especialmente para el bienestar y la tranquilidad de tus compañeros peludos. Este espacio se encuentra rodeado de abundante vegetación, creando un ambiente natural y relajante que permite a las mascotas conectarse con la naturaleza.
                    </p>
                    <p>
                        El cuarto, cuidadosamente diseñado, es oscuro para proporcionar un entorno óptimo para el descanso y
                        la relajación. La frescura de las plantas y la sombra natural contribuyen a mantener una temperatura
                        agradable, haciendo de este lugar un refugio perfecto donde las mascotas pueden relajarse y recargar
                        energías.
                    </p>
                    <p>
                        Además, la vegetación circundante no solo añade belleza y serenidad al entorno, sino que también
                        proporciona un aire más puro y fresco. Nuestro compromiso es brindar un espacio seguro y cómodo,
                        asegurando que cada mascota disfrute de una estancia tranquila y placentera en nuestro hotel.
                    </p>
                </div>
            </div>
            <div className="TarjetaCuarto">
                <div className="CabeceraTarjeta">
                    <div className="ContenedorImagen">
                        <img src={CuartoClassic} alt="Foto Cuarto Classic" className="FotoCuarto" />
                    </div>
                    <div className="ContenedorCaracteristicas">
                        <div className="NombreCuarto">
                            <p>Cuarto Classic Nostalgia</p>
                        </div>
                        <div className="IconosCaracteristicas">
                            <img src={IconMusica} alt="Icono Música Ambiental" className="Icono" />
                            <img src={IconTermometro} alt="Icono TermometroIcon" className="Icono" />
                            <img src={IconSupervision} alt="Icono Supervision" className="Icono" />
                        </div>
                    </div>
                    <div className="ContenedorPrecios">
                        <p className="PrecioBase">$300</p>
                        <p className="PorNoche">Por noche</p>
                        <p className="Total">$1200 por 4 noches</p>
                    </div>
                </div>
                <div className="DescripcionCuarto">
                    <p>Ver más...</p>
                </div>
            </div>
            <div className="TarjetaCuarto">
                <div className="CabeceraTarjeta">
                    <div className="ContenedorImagen">
                        <img src={CuartoNostalgia} alt="Foto Cuarto Ensueño" className="FotoCuarto" />
                    </div>
                    <div className="ContenedorCaracteristicas">
                        <div className="NombreCuarto">
                            <p>Cuarto Ensueño</p>
                        </div>
                        <div className="IconosCaracteristicas">
                            <img src={IconMusica} alt="Icono Música Ambiental" className="Icono" />
                            <img src={IconTermometro} alt="Icono TermometroIcon" className="Icono" />
                            <img src={IconSupervision} alt="Icono Supervision" className="Icono" />
                        </div>
                    </div>
                    <div className="ContenedorPrecios">
                        <p className="PrecioBase">$200</p>
                        <p className="PorNoche">Por noche</p>
                        <p className="Total">$800 por 4 noches</p>
                    </div>
                </div>
                <div className="DescripcionCuarto">
                    <p>Ver más...</p>
                </div>
            </div>
        </div>
    )
}


export default ReservarCuarto;
