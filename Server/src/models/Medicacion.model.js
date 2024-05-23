import mongoose from "mongoose";

const MedicacionScheme = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      require: true,
      trim: true,
    },
    Frecuencia: {
      type: String,
      require: true,
      trim: true,
    },
    UltimaDosis: {
      type: Date,
      require: true,
      trim: true,
    },
    NumeroAplicacionesRes: {
      type: Number,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Medicacion", MedicacionScheme);
