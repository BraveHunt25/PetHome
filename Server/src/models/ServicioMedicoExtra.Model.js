import mongoose from "mongoose";

const ServicioMedicoScheme = new mongoose.Schema(
  {
    Medicacion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medicacion",
      require: true,
    },
    ObservacionesMedicas: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ServicioMedico", ServicioMedicoScheme);
