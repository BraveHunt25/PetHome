import { useNavigate } from "react-router-dom";
import './custom-styles.css';
import uno from'./Images/dog.jpg';


export default function RootPage() {

  const navigate = useNavigate();

  return (
    <div className="bg-color4 w-screen h-screen flex flex-col justify-start items-center pt-10">
      <div className="space-x-2 mb-5">
        <button onClick={() => navigate("/RegisterCliente")} className="bg-color1 text-color3 p-2 rounded-md">Registrar Clientes</button>
        <button onClick={() => navigate("/RegisterMascota")} className="bg-color1 text-color3 p-2 rounded-md">Registrar Mascota</button>
        <button onClick={() => navigate("/RegisterEspecie")} className="bg-color1 text-color3 p-2 rounded-md">Registrar Especie</button>
        <button onClick={() => navigate("/RegisterCuidado")} className="bg-color1 text-color3 p-2 rounded-md">Registrar Cuidado</button>
        <button onClick={() => navigate("/RegisterVacuna")} className="bg-color1 text-color3 p-2 rounded-md">Registrar Vacuna</button>
      </div>
      <div className="space-x-2 space-y-2">
        <button onClick={() => navigate("/TablesPage/ClienteTable")} className="bg-color1 text-color3 p-2 rounded-md">Tabla Clientes</button>
        <button onClick={() => navigate("/TablesPage/EspecieTable")} className="bg-color1 text-color3 p-2 rounded-md">Tabla Especies</button>
        <button onClick={() => navigate("/TablesPage/CuidadoTable")} className="bg-color1 text-color3 p-2 rounded-md">Tabla Cuidados</button>
        <button onClick={() => navigate("/TablesPage/VacunaTable")} className="bg-color1 text-color3 p-2 rounded-md">Tabla Vacunas Registradas</button>
        <button onClick={() => navigate("/TablesPage/MascotaTable")} className="bg-color1 text-color3 p-2 rounded-md">Tabla Mascotas</button>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <img src={uno} alt="Mascota" className="w-1/2 h-1/16 md:w-1/2 lg:w-1/3 xl:w-2/5" />
      </div>
    </div>
  );
}

