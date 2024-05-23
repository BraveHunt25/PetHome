/**
 * Controladores básicos para las peticiones a la base de datos
 */
import Cliente from "../models/Cliente.model.js";

export const getClientes = async (req, res) => {
  try {
    const Clientes = await Clientes.find({ user : req.user.id }).populate("user");
    res.json(Clientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    const { Nombre_Cliente,
      Apellido_Paterno,
      Apellido_Materno,
      Numero_1,
      Numero_2,
      Email,
      CURP,
      DireccionReferencia,
      Nombre_Mascota,
      FechaNacimiento,
      Raza,
      Color,
      Tamaño,
      Nombre_Vacuna,
      FechaAplicacion,
      Dosis,
      CondicionesEspeciales,
      Alimentacion,
      Alergias,
      ComentariosExtra,
 } = req.body;
    const newCliente = new Cliente({
      Nombre_Cliente,
      Apellido_Paterno,
      Apellido_Materno,
      Numero_1,
      Numero_2,
      Email,
      CURP,
      DireccionReferencia,
      Nombre_Mascota,
      FechaNacimiento,
      Raza,
      Color,
      Tamaño,
      Nombre_Vacuna,
      FechaAplicacion,
      Dosis,
      CondicionesEspeciales,
      Alimentacion,
      Alergias,
      ComentariosExtra
    });
    await newCliente.save();
    res.json(newCliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const deletedCliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!deletedCliente)
      return res.status(404).json({ message: "Cliente not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!cliente)
    return res.status(404).json({ message: "No se encontro la consulta" });
  res.json(cliente);
};

export const getCliente = async (req, res) => {
  try {
    const Cliente = await Cliente.findById(req.params.id);
    if (!Cliente) return res.status(404).json({ message: "Cliente not found" });
    return res.json(Cliente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
