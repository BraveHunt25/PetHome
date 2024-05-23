import { useEffect } from "react";
import { useCuidado } from "../context/CuidadoContext";
import { Link } from "react-router-dom";
import './custom-styles.css';


export default function CuidadoTable() {
  const { getCuidados, cuidados, deleteCuidado } = useCuidado();

  useEffect(() => {
    getCuidados();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between">
        <Link to="/RegisterCuidado">
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
      <div className="w-full text-center text-xl bg-color5">Cuidados</div>
      <div className="overflow-auto">
        <table className="bg-color2 table-auto border-separate border-spacing-x-3">
          <thead>
            <tr className="text-center ">
              <th>ID</th>
              <th>Condiciones Especiales</th>
              <th>Alimentacion</th>
              <th>Alergias</th>
              <th>Comentarios Extra</th>
            </tr>
          </thead>
          <tbody>
            {cuidados.map((atributos) => (
              <tr className="text-center" key={atributos._id}>
                <td>{atributos._id}</td>
                <td>{atributos.CondicionesEspeciales}</td>
                <td>{atributos.Alimentacion}</td>
                <td>{atributos.Alergias}</td>
                <td>{atributos.ComentariosExtra}</td>
                <td>
                  <Link to={`/RegisterCuidado/${atributos._id}`}>
                    <button className="bg-color1 text-white p-1 mb-1 rounded-md">
                      Editar
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteCuidado(atributos._id);
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
