import Cuidado from "../models/Cuidado.model.js";

export const CreateCuidado = async (req, res) => {
  const { CondicionesEspeciales, Alimentacion, Alergias, ComentariosExtra } =
    req.body;

  const newCuidado = new Cuidado({
    CondicionesEspeciales,
    Alimentacion,
    Alergias,
    ComentariosExtra,
  });

  const SavedCuidado = await newCuidado.save();
  res.json(SavedCuidado);
};

export const getCuidados = async (req, res) => {
  const cuidado = await Cuidado.find();
  res.json(cuidado);
};

export const getCuidado = async (req, res) => {
  const cuidado = await Cuidado.findById(req.params.id);
  if (!cuidado)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(cuidado);
};
export const updateCuidado = async (req, res) => {
  const cuidado = await Cuidado.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!cuidado)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(cuidado);
};
export const deleteCuidado = async (req, res) => {
  const cuidado = await Cuidado.findByIdAndDelete(req.params.id);
  if (!cuidado)
    return res.status(404).json({ message: "No se encontro la consulta" });
  return res.sendStatus(204);
};
