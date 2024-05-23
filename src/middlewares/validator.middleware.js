/*
Middleware de autentificación para validar el tipo de datos ingresados para el esquema de usuarios
*/
export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ message: error.errors.map((error) => error.message) });
  }
};
