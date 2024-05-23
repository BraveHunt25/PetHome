import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      require: true,
    },
    Apellidos: {
      type: String,
      require: true,
    },
    Numero_1: {
      type: Number,
      require: true,
      trim: true,
    },
    Numero_2: {
      type: Number,
      trim: true,
    },
    Email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    CURP: {
      type: String,
      require: true,
      trim: true,
    },
    DireccionReferencia: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cliente", ClienteSchema);
