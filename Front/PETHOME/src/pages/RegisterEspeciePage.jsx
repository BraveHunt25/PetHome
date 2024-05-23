import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useEspecie } from "../context/EspecieContext";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function RegisterEspecie() {
  const { register, handleSubmit, setValue } = useForm();
  const { createEspecie, getEspecie, updateEspecie } = useEspecie();
  const Navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadEspecie() {
      if (params.id) {
        const especie = await getEspecie(params.id);
        console.log(especie);
        setValue("Nombre", especie.Nombre);
        setValue("Raza", especie.Raza);
        setValue("Comentarios", especie.Comentarios);
      }
    }
    loadEspecie();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateEspecie(params.id, data);
    } else {
      createEspecie(data);
    }
    Navigate("/TablesPage/EspecieTable");
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
              {...register("Raza", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Raza"
            />
            <input
              type="text"
              {...register("Comentarios", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Comentarios"
            />
            
          </div>
          <div className="p-3 flex justify-between space-x-2">
            <button type="submit" className="bg-color1 text-white p-1 mb-1 rounded-md">Enviar</button>
            <Link to="/">
              <button className="bg-color1 text-white p-1 mb-1 rounded-md">Volver Menu</button>
            </Link>
            <Link to="/TablesPage/EspecieTable">
              <button className="bg-color1 text-white p-1 mb-1 rounded-md">Volver Tabla</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}