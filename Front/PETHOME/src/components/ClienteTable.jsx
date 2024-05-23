import { useEffect } from "react";
import { useCliente } from "../context/ClienteContext";
import { Link } from "react-router-dom";

export default function ClienteTable() {
  const { getClientes, clientes, deleteCliente } = useCliente();

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between">
        <Link to="/RegisterCliente">
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
      <div className="w-full text-center text-xl bg-color5">Clientes</div>
      <div className="overflow-auto">
        <table className="bg-color2 table-auto border-separate border-spacing-x-3">
          <thead>
            <tr className="text-center ">
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Numero 1</th>
              <th>Numero 2</th>
              <th>Email</th>
              <th>CURP</th>
              <th>DireccionReferencia</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((atributos) => (
              <tr className="text-center" key={atributos._id}>
                <td>{atributos._id}</td>
                <td>{atributos.Nombre}</td>
                <td>{atributos.Apellidos}</td>
                <td>{atributos.Numero_1}</td>
                <td>{atributos.Numero_2}</td>
                <td>{atributos.Email}</td>
                <td>{atributos.CURP}</td>
                <td>{atributos.DireccionReferencia}</td>
                <td>
                  <Link to={`/RegisterCliente/${atributos._id}`}>
                    <button className="bg-color1 text-white p-1 mb-1 rounded-md">Editar</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteCliente(atributos._id);
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
