/*
Este esquema dicta la estructura de la solicitud. Aquí se indican si son requeridos y de qué tipo son
*/
import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema(
  {Nombre_Cliente: {
    type: String,
    required: true,
    trim: true,
  },
  Apellido_Paterno: {
    type: String,
    required: true,
    trim: true,
  },
  Apellido_Materno: {
    type: String,
    required: true,
    trim: true,
  },
  Numero_1: {
    type: Number,
    required: true,
    trim: true,
  },
  Numero_2: {
    type: Number,
    required: true,
    trim: true,
  },
  Email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  CURP: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  DireccionReferencia: {
    type: String,
    required: true,
  },
    Nombre_Mascota: {
      type: String,
      required: true,
      trim: true,
    },
    FechaNacimiento: {
      type: Date,
      default: Date.now,
    },
    Raza: {
      type: String,
      required: true,
      trim: true,
    },
    Color: {
      type: String,
      required: true,
      trim: true,
    },
    Tamaño: {
      type: String,
      required: true,
      trim: true,
    },
    Nombre_Vacuna: {
      type: String,
      required: true,
      trim: true,
    },
    FechaAplicacion: {
      type: Date,
      default: Date.now,
    },
    Dosis: {
      type: Number,
      required: true,
      trim: true,
    },
CondicionesEspeciales: {
      type: String,

    },
    Alimentacion: {
      type: String,
      required: true,
      trim: true,
    },
    Alergias: {
      type: String,
      trim: true,
    },
    ComentariosExtra: {
        type: String,
      },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cliente", ClienteSchema);
