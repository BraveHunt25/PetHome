import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/tasksContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      // navigate("/tasks");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="Nombre">Nombre del cliente</Label>
        <Input
          type="text"
          name="Nombre"
          placeholder="Nombre(s)"
          {...register("Nombre")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}

        <Label htmlFor="Apellido1">Apellido Paterno</Label>
        <Input
          type="text"
          name="Apellido1"
          placeholder="Apellido paterno"
          {...register("Apellido1")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}

        <Label htmlFor="Apellido2">Apellido Materno</Label>
        <Input
          type="text"
          name="Apellido2"
          placeholder="Apellido Materno"
          {...register("Apellido2")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}

        <Label htmlFor="Numero1">Numero de celular</Label>
        <Input
          type="text"
          name="Numero1"
          placeholder="Numero de celular"
          {...register("Numero1")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}

        <Label htmlFor="Numero2">Numero de casa</Label>
        <Input
          type="text"
          name="Numero2"
          placeholder="Numero de casa"
          {...register("Numero2")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="CURP">CURP</Label>
        <Input
          type="text"
          name="CURP"
          placeholder="CURP"
          {...register("CURP")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="DireccionReferencia">Direccion de referencia</Label>
        <Input
          type="text"
          name="DireccionReferencia"
          placeholder="Direccion de referencia"
          {...register("DireccionReferencia")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="NombreMascota">Nombrede la Mascota</Label>
        <Input
          type="text"
          name="NombreMascota"
          placeholder="Nombre de la Mascota"
          {...register("NombreMascota")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}

        <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
        <Input type="date" name="fechaNacimiento" {...register("fechaNacimiento")} />

        <Label htmlFor="Raza">Raza</Label>
        <Input
          type="text"
          name="Raza"
          placeholder="Raza"
          {...register("Raza")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="Color">Color</Label>
        <Input
          type="text"
          name="Color"
          placeholder="Color"
          {...register("Color")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="NombreVacuna">Vacuna(s) aplicadas </Label>
        <Input
          type="text"
          name="NombreVacuna"
          placeholder="Nombre de vacuna(s) aplicadas"
          {...register("NombreVacuna")}
          autoFocus
        />

        <Label htmlFor="FechaAplicaciones">Date</Label>
        <Input type="date" name="FechaAplicaciones" {...register("FechaAplicaciones")} />

        <Label htmlFor="Dosis">Dosis</Label>
        <Input
          type="text"
          name="Dosis"
          placeholder="Numero de dosis aplicadas"
          {...register("Dosis")}
          autoFocus
        />

        <Label htmlFor="CondicionesEspeciales">Condiciones Especiales</Label>
        <Textarea
          name="CondicionesEspeciales"
          id="CondicionesEspeciales"
          rows="3"
          placeholder="Condiciones Especiales"
          {...register("dCondiciones Especiales")}
        ></Textarea>
      
        <Label htmlFor="Alimentacion">Alimentación</Label>
        <Textarea
          name="Alimentacion"
          id="Alimentacion"
          rows="3"
          placeholder="Alimentación"
          {...register("Alimentacion")}
        ></Textarea>
        
        <Label htmlFor="Alergias">Alergiasn</Label>
        <Textarea
          name="Alergias"
          id="Alergias"
          rows="3"
          placeholder="Alergias"
          {...register("Alergias")}
        ></Textarea>

        <Label htmlFor="ComentariosExtra">Comentarios Extra</Label>
        <Textarea
          name="ComentariosExtra"
          id="ComentariosExtra"
          rows="3"
          placeholder="Comentarios Extra"
          {...register("ComentariosExtra")}
        ></Textarea>
        
        <Button>Save</Button>
      </form>
    </Card>
  );
}
