import mongoose from "mongoose";

const ReservacionSchema = new mongoose.Schema(
  {
    Sucursal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sucursal",
      require: true,
    },
    Mascota: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mascota",
      require: true,
    },
    Cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cliente",
      require: true,
    },
    CheckOut: {
      type: Date,
      require: true,
      trim: true,
    },
    CheckIn: {
      type: Date,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Reservacion", ReservacionSchema);
