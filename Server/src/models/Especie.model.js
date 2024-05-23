import mongoose from "mongoose";

const EspecieSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      require: true,
      trim: true,
    },
    Raza: {
      type: String,
      require: true,
      trim: true,
    },
    Comentarios: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Especie", EspecieSchema);
