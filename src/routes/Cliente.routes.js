/*
STATUS: Está en aparente desuso, por lo que es necesario por ligarlo o eliminarlo
Indica las rutas de solicitud ara ingresar, consultar, eliminar y actualizar datos
*/
import { Router } from "express";
import {
  getClientes,
  getCliente,
  deleteCliente,
  updateCliente,
  createCliente,
} from "../controllers/Cliente.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createClienteSchema } from "../schemas/Cliente.schema.js";

const router = Router();

router.get("/Cliente", auth, getClientes);

router.post("/Cliente", auth, validateSchema(createClienteSchema), createCliente);

router.get("/Cliente/:id", auth, getCliente);

router.put("/Cliente/:id", auth, updateCliente);

router.delete("/Cliente/:id", auth, deleteCliente);

export default router;
