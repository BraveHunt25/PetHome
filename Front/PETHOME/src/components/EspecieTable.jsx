import { useEffect } from "react";
import { useEspecie } from "../context/EspecieContext";
import { Link } from "react-router-dom";

export default function EspecieTable() {
  const { getEspecies, especies, deleteEspecie } = useEspecie();

  useEffect(() => {
    getEspecies();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between">
        <Link to="/RegisterEspecie">
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
      <div className="w-full text-center text-xl bg-color5">Especies</div>
      <div className="overflow-auto">
        <table className="bg-color2 table-auto border-separate border-spacing-x-3">
          <thead>
            <tr className="text-center ">
              <th>ID</th>
              <th>Nombre</th>
              <th>Raza</th>
              <th>Comentarios</th>
            </tr>
          </thead>
          <tbody>
            {especies.map((atributos) => (
              <tr className="text-center" key={atributos._id}>
                <td>{atributos._id}</td>
                <td>{atributos.Nombre}</td>
                <td>{atributos.Raza}</td>
                <td>{atributos.Comentarios}</td>
                <td>
                  <Link to={`/RegisterEspecie/${atributos._id}`}>
                    <button className="bg-color1 text-white p-1 mb-1 rounded-md">Editar</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteEspecie(atributos._id);
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
