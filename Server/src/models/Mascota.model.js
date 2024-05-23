import mongoose from "mongoose";

const MascotaSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      require: true,
      trim: true,
    },
    FechaNacimiento: {
      type: Date,
      require: true,
      trim: true,
    },
    Especie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Especie",
      require: true,
    },
    Color: {
      type: String,
      require: true,
      trim: true,
    },
    Tamaño: {
      type: String,
      require: true,
      trim: true,
    },
    VacunasRegistradas: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VacunasRegistradas",
    },
    Cuidados: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cuidados",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Mascota", MascotaSchema);
