import { z } from "zod";

export const signupSchema = z
  .object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Email is not valid",
      }),
    password1: z
      .string({
        required_error: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters long",
      }),
    password2: z.string({
      required_error: "Password is required",
    }),
    curp: z
      .string({
        required_error: "CURP is required",
      })
      .min(18, {
        message: "CURP must be at least 18 characters long",
      }),
    nombres: z
      .string({
        required_error: "Nombres completos is required",
      })
      .min(3, {
        message: "Nombre completos must be at least 3 characters long"
      }),
    primer_apellido: z
      .string({
        required_error: "Primer apellido completos is required",
      })
      .min(3, {
        message: "Primer apellido must be at least 18 characters long"
      }),
    segundo_apellido: z
      .string({
        required_error: "Segundo apellido completos is required",
      })
      .min(3, {
        message: "Segundo apellido must be at least 3 characters long"
      }),
    calle: z
      .string({
        required_error: "Calle is required"
      })
      .min(3, {
        message: "Calle must be at least 3 characters long"
      }),
    numero_calle: z
      .number({
        required_error: "Numero calle is required"
      }),
    nombre_colonia: z
      .string({
        required_error: "Nombre colonia is required"
      })
      .min(3, {
        message: "Nombre colonia must be at least 3 characters long"
      }),
    nombre_municipio: z
      .string({
        required_error: "Nombre municipio is required"
      })
      .min(3, {
        message: "Nombre municipio must be at least 3 characters long"
      }),
    codigo_postal: z
      .number({
        required_error: "Codigo postal is required"
      })
      .min(5, {
        message: "Codigo postal must be at least 5 characters long"
      }),
    entidad: z
      .string({
        required_error: "Nombre entidad is required"
      })
      .min(3, {
        message: "Nombre entidad must be at least 3 characters long"
      }),
    numero_tel: z
      .number({
        required_error: "Número telefónico is required"
      })
      .min(10, {
        message: "Codigo postal must be at least 10 characters long"
      }),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });

export const signinSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
});
