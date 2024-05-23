import mongoose from "mongoose";

const CuidadoSchema = new mongoose.Schema(
  {
    CondicionesEspeciales: {
      type: String,
      require: true,
    },
    Alimentacion: {
      type: String,
      require: true,
    },
    Alergias: {
      type: String,
      require: true,
    },
    ComentariosExtra: {
        type: String,
        require: true,
      },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cuidado", CuidadoSchema);