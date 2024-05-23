import Vacuna from "../models/VacunasRegistradas.model.js";

export const getVacunas = async (req, res) => {
  const Vacunas = await Vacuna.find();
  res.json(Vacunas);
};
export const CreateVacuna = async (req, res) => {
  const { Nombre, FechaAplicacion, Dosis } = req.body;

  const newVacuna = new Vacuna({
    Nombre,
    FechaAplicacion,
    Dosis,
  });

  const SavedVacuna = await newVacuna.save();
  res.json(SavedVacuna);
};
export const getVacuna = async (req, res) => {
  const vacuna = await Vacuna.findById(req.params.id);
  if (!vacuna)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(vacuna);
};
export const updateVacuna = async (req, res) => {
  const vacuna = await Vacuna.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!vacuna)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(vacuna);
};
export const deleteVacuna = async (req, res) => {
  const vacuna = await Vacuna.findByIdAndDelete(req.params.id);
  if (!vacuna)
    return res.status(404).json({ message: "No se encontro la consulta" });
  return res.sendStatus(204);
};
