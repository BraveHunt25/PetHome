import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMascota } from "../context/MascotaContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useEspecie } from "../context/EspecieContext";
import { useVacuna } from "../context/VacunaRegistradaContext";
import { useCuidado } from "../context/CuidadoContext";
import './custom-styles.css';

export default function RegisterMascota() {
  const { register, handleSubmit, setValue, control } = useForm();
  const { createMascota, getMascota, updateMascota } = useMascota();
  const { getEspecie, getEspecies, especies } = useEspecie();
  const { getVacuna, getVacunas, vacunas } = useVacuna();
  const { getCuidado, getCuidados, cuidados } = useCuidado();
  const Navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadMascota() {
      if (params.id) {
        const mascota = await getMascota(params.id);
        console.log(mascota);
        setValue("Nombre", mascota.Nombre);
        setValue("FechaNacimiento", mascota.FechaNacimiento);
        setValue("Especie", mascota.Especie);
        setValue("Color", mascota.Color);
        setValue("Tamaño", mascota.Tamaño);
        setValue("VacunasRegistradas", mascota.VacunasRegistrads);
        setValue("Cuidados", mascota.Cuidados);
      }
    }
    loadMascota();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateMascota(params.id, data);
    } else {
      createMascota(data);
    }
    Navigate("/TablesPage/MascotaTable");
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
            <Controller
              control={control}
              name="FechaNacimiento"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Seleccione Fecha de Nacimiento"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  className="p-1 border border-gray-900 rounded-md appearance-none w-full"
                />
              )}
            />
            
            <input
              type="text"
              {...register("Color")}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Color"
            />
            <input
              type="text"
              {...register("Tamaño", { required: true })}
              className="p-1 border border-gray-900 rounded-md "
              placeholder="Tamaño (Ch,M,G)"
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
            <Link to="/TablesPage/MascotaTable">
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
