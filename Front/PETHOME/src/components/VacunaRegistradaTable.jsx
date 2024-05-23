import { useEffect } from "react";
import { useVacuna } from "../context/VacunaRegistradaContext";
import { Link } from "react-router-dom";

export default function VacunaTable() {
  const { getVacunas, vacunas, deleteVacuna } = useVacuna();

  useEffect(() => {
    getVacunas();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between">
        <Link to="/RegisterVacuna">
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
      <div className="w-full text-center text-xl bg-color5">Vacunas</div>
      <div className="overflow-auto">
        <table className="bg-color2 table-auto border-separate border-spacing-x-3">
          <thead>
            <tr className="text-center ">
              <th>ID</th>
              <th>Nombre</th>
              <th>FechaAplicacion</th>
              <th>Dosis</th>
            </tr>
          </thead>
          <tbody>
            {vacunas.map((atributos) => (
              <tr className="text-center" key={atributos._id}>
                <td>{atributos._id}</td>
                <td>{atributos.Nombre}</td>
                <td>{new Date(atributos.FechaAplicacion).toLocaleDateString()}</td>
                <td>{atributos.Dosis}</td>
                <td>
                  <Link to={`/RegisterVacuna/${atributos._id}`}>
                    <button className="bg-color1 text-white p-1 mb-1 rounded-md">
                      Editar
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteVacuna(atributos._id);
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
