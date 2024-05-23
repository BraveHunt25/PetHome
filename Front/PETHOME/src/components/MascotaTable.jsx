import { useEffect } from "react";
import { useMascota } from "../context/MascotaContext";
import { Link } from "react-router-dom";
import EspecieTable from "./EspecieTable";
import { useEspecie } from "../context/EspecieContext";

export default function MascotaTable() {
  const { getMascotas, mascotas, deleteMascota } = useMascota();
  const { getEspecie } = useEspecie();

  useEffect(() => {
    getMascotas();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between">
        <Link to="/RegisterMascota">
          <button className="bg-color1 text-white p-2 mb-2 rounded-md">
            Agregar
          </button>
        </Link>
        <Link to="/">
          <button className="bg-color1 text-white p-2 mb-2 rounded-md">
            Volver Menu
          </button>
        </Link>
      </div>
      <div className="w-full text-center text-xl bg-color5">Mascotas</div>
      <div className="overflow-auto">
        <table className="bg-color2 table-auto border-separate border-spacing-x-3">
          <thead>
            <tr className="text-center ">
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha Nacimiento</th>
              <th>Color</th>
              <th>Tamaño</th>
            </tr>
          </thead>
          <tbody>
            {mascotas.map((atributos) => (
              <tr className="text-center" key={atributos._id}>
                <td>{atributos._id}</td>
                <td>{atributos.Nombre}</td>
                <td>{atributos.FechaNacimiento}</td>                
                <td>{atributos.Color}</td>
                <td>{atributos.Tamaño}</td>
  
                <td>
                  <Link to={`/RegisterMascota/${atributos._id}`}>
                    <button className="bg-color1 text-white p-1 mb-1 rounded-md">
                      Editar
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteMascota(atributos._id);
                    }}
                    className="bg-color1 text-white p-1 mb-1 rounded-md"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


