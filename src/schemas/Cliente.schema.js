import { z } from "zod";

export const createClienteSchema = z.object({
  Nombre_Cliente: z.string({
    required_error: "Nombre requerido",
  }),
  Apellido_Paterno: z.string({
    required_error: "Apellido paterno requerido",
  }),
  Apellido_Materno: z.string({
    required_error: "Apellido materno requerido",
  }),
  Numero_1: z.string({
    required_error: "Número de contacto requerido",
  }),
  Numero_2: z.string({
    required_error: "Número de contacto requerido",
  }),
  Email: z.string({
    required_error: "Email requerido", 
  }), 
  CURP: z.string({
      required_error: "CURP requerido",     
  }),
  DireccionReferencia: z.string({
    required_error: "Dirección de referencia requerido",     
}),
Nombre_Mascota: z.string({
  required_error: "Nombre de la mascota requerido",     
}),
FechaNacimiento: z.string({
  required_error: "Fecha de nacimiento de la mascota requerida",     
}),
Raza: z.string({
  required_error: "Raza requerida",     
}),
Color: z.string({
  required_error: "Color requerido",     
}),
Tamaño: z.string({
  required_error: "Tamaño requerido",     
}),
Alimentacion: z.string({
  required_error: "Alimentación requerida",     
}),
  Nombre_Vacuna: z.string().optional(),
  FechaAplicacion: z.string().datetime().optional(),
  Dosis: z.string().datetime().optional(),
  CondicionesEspeciales: z.string().datetime().optional(),
  Alergias: z.string().datetime().optional(),
  CopmentariosExtra: z.string().datetime().optional(),
});
