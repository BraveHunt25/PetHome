import mongoose from "mongoose";

const HospedajeScheme = new mongoose.Schema(
  {
    Reservacion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservacion",
      require: true,
    },
    ServiciosExtra: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiciosExtra",
      require: true,
    },
    Cuarto: {
      type: Number,
      require: true,
      trim: true,
    },
    Equipaje: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Hospedaje", HospedajeScheme);
