import Cliente from "../models/Cliente.model.js";

export const getClientes = async (req, res) => {
  const Clientes = await Cliente.find();
  res.json(Clientes);
};
export const CreateCliente = async (req, res) => {
  const {
    Nombre,
    Apellidos,
    Numero_1,
    Numero_2,
    Email,
    CURP,
    DireccionReferencia,
  } = req.body;

  const newCliente = new Cliente({
    Nombre,
    Apellidos,
    Numero_1,
    Numero_2,
    Email,
    CURP,
    DireccionReferencia,
  });

  const SavedCliente = await newCliente.save();
  res.json(SavedCliente);
};
export const getCliente = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  if (!cliente)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(cliente);
};
export const updateCliente = async (req, res) => {
  const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!cliente)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(cliente);
};
export const deleteCliente = async (req, res) => {
  const cliente = await Cliente.findByIdAndDelete(req.params.id);
  if (!cliente)
    return res.status(404).json({ message: "No se encontro la consulta" });
  return res.sendStatus(204);
};
