import mongoose from "mongoose";

const VacunasRegistradasScheme = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      require: true,
      trim: true,
    },
    FechaAplicacion: {
      type: Date,
      require: true,
      trim: true,
    },
    Dosis: {
      type: Number,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("VacunasRegistradas", VacunasRegistradasScheme);
