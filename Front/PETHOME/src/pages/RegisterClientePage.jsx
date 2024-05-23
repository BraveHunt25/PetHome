import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCliente } from "../context/ClienteContext";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function RegisterCliente() {
  const { register, handleSubmit, setValue } = useForm();
  const { createCliente, getCliente, updateCliente } = useCliente();
  const Navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadCliente() {
      if (params.id) {
        const cliente = await getCliente(params.id);
        console.log(cliente);
        setValue("CondicionesEspeciales", cliente.Nombre);
        setValue("Apellidos", cliente.Apellidos);
        setValue("Numero_1", cliente.Numero_1);
        setValue("Numero_2", cliente.Numero_2);
        setValue("Email", cliente.Email);
        setValue("CURP", cliente.CURP);
        setValue("DireccionReferencia", cliente.DireccionReferencia);
      }
    }
    loadCliente();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateCliente(params.id, data);
    } else {
      createCliente(data);
    }
    Navigate("/TablesPage/ClienteTable");
  });

  return (
    <div className="bg-color4 w-screen h-screen flex justify-center items-center">
      <div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col space-y-1">
            <input
              type="text"
              {...register("Nombre", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Nombre"
            />
            <input
              type="text"
              {...register("Apellidos", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Apellidos"
            />
            <input
              type="text"
              {...register("Numero_1", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Numero 1"
            />
            <input
              type="text"
              {...register("Numero_2")}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Numero 2"
            />
            <input
              type="text"
              {...register("Email", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Email"
            />
            <input
              type="text"
              {...register("CURP", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="CURP"
            />
            <input
              type="text"
              {...register("DireccionReferencia", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Direccion de Referencia"
            />
          </div>
          <div className="p-3 flex justify-between space-x-2">
            <button type="submit" className="bg-color1 text-white p-1 mb-1 rounded-md">Enviar</button>
            <Link to="/">
              <button className="bg-color1 text-white p-1 mb-1 rounded-md">Volver Menu</button>
            </Link>
            <Link to="/TablesPage/ClienteTable">
              <button className="bg-color1 text-white p-1 mb-1 rounded-md">Volver Tabla</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
