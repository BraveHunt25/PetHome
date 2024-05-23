import mongoose from "mongoose";

const ServiciosExtra = new mongoose.Schema(
  {
    ServicioMedico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServicioMedico",
    },
    ServicioExtra: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ServiciosExtra", ServiciosExtra);
