import Mascota from "../models/Mascota.model.js";


export const getMascotas = async (req, res) => {
  const Mascotas = await Mascota.find();
  res.json(Mascotas);
};
export const CreateMascota = async (req, res) => {
  const {
    Nombre,
    FechaNacimiento,
    Color,
    Tamaño,
  } = req.body;

  const newMascota = new Mascota({
    Nombre,
    FechaNacimiento,
    Color,
    Tamaño,
  });

  const SavedMascota = await newMascota.save();

  res.json(SavedMascota);
};
export const getMascota = async (req, res) => {
  const mascota = await Mascota.findById(req.params.id);
  if (!mascota)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(mascota);
};
export const updateMascota = async (req, res) => {
  const mascota = await Mascota.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!mascota)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(mascota);
};
export const deleteMascota = async (req, res) => {
  const mascota = await Mascota.findByIdAndDelete(req.params.id);
  if (!mascota)
    return res.status(404).json({ message: "No se encontro la consulta" });
  return res.sendStatus(204);
};
