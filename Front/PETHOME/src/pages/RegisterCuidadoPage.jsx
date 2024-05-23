import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCuidado } from "../context/CuidadoContext";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function RegisterCuidado() {
  const { register, handleSubmit, setValue } = useForm();
  const { createCuidado, getCuidado, updateCuidado } = useCuidado();
  const Navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadCuidado() {
      if (params.id) {
        const cuidado = await getCuidado(params.id);
        console.log(cuidado);
        setValue("CondicionesEspeciales", cuidado.CondicionesEspeciales);
        setValue("Alimentacion", cuidado.Alimentacion);
        setValue("Alergias", cuidado.Alergias);
        setValue("ComentariosExtra", cuidado.ComentariosExtra);
      }
    }
    loadCuidado();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateCuidado(params.id, data);
    } else {
      createCuidado(data);
    }
    Navigate("/TablesPage/CuidadoTable");
  });

  return (
    <div className="bg-color4 w-screen h-screen flex justify-center items-center">
      <div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col space-y-1">
            <input
              type="text"
              {...register("CondicionesEspeciales", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Condiciones Especiales"
            />
            <input
              type="text"
              {...register("Alimentacion", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Alimetacion"
            />
            <input
              type="text"
              {...register("Alergias", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Alergias"
            />
            <input
              type="text"
              {...register("ComentariosExtra")}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Comentarios Extra"
            />
          </div>
          <div className="p-3 flex justify-between space-x-2">
            <button
              type="submit"
              className="bg-color1 text-white p-1 mb-1 rounded-md"
            >
              Enviar
            </button>
            <Link to="/">
              <button className="bg-color1 text-white p-1 mb-1 rounded-md">
                Volver Menu
              </button>
            </Link>
            <Link to="/TablesPage/CuidadoTable">
              <button className="bg-color1 text-white p-1 mb-1 rounded-md">
                Volver Tabla
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
