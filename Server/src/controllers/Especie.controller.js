import Especie from "../models/Especie.model.js";

export const CreateEspecie = async (req, res) => {
  const { Nombre, Raza, Comentarios } = req.body;

  const newEspecie = new Especie({
    Nombre,
    Raza,
    Comentarios,
  });

  const SavedEspecie = await newEspecie.save();
  res.json(SavedEspecie);
};

export const getEspecies = async (req, res) => {
  try {
    const especie = await Especie.find();
    res.json(especie);
  } catch (error) {
    console.log(error);
  }
};

export const getEspecie = async (req, res) => {
  const especie = await Especie.findById(req.params.id);
  if (!especie)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(especie);
};
export const updateEspecie = async (req, res) => {
  const especie = await Especie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!especie)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(especie);
};
export const deleteEspecie = async (req, res) => {
  const especie = await Especie.findByIdAndDelete(req.params.id);
  if (!especie)
    return res.status(404).json({ message: "No se encontro la consulta" });
  return res.sendStatus(204);
};
