import mongoose from "mongoose";

const SucursalSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      require: true,
      trim: true,
    },
    Cuidad: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Sucursal", SucursalSchema);
