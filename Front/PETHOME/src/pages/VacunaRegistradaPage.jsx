import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useVacuna } from "../context/VacunaRegistradaContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export default function RegisterVacuna() {
  const { register, handleSubmit, setValue, control } = useForm();
  const { createVacuna, getVacuna, updateVacuna } = useVacuna();
  const Navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadVacuna() {
      if (params.id) {
        const vacuna = await getVacuna(params.id);
        console.log(vacuna);
        setValue("Nombre", vacuna.Nombre);
        setValue("FechaAplicacion", vacuna.FechaAplicacion);
        setValue("Dosis", vacuna.Dosis);
      }
    }
    loadVacuna();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateVacuna(params.id, data);
    } else {
      createVacuna(data);
    }
    Navigate("/TablesPage/VacunaTable");
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
              placeholder="Nombre del medicamento"
            />
            <Controller
              control={control}
              name="FechaAplicacion"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Seleccione Fecha de aplicacion"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  className="p-1 border border-gray-900 rounded-md appearance-none w-full"
                />
              )}
            />
            <input
              type="text"
              {...register("Dosis", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Numero de dosis aplicadas"
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
            <Link to="/TablesPage/VacunaTable">
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
