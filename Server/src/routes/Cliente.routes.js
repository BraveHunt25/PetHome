import { Router } from "express";
import {
  getClientes,
  getCliente,
  CreateCliente,
  deleteCliente,
  updateCliente,
} from "../controllers/Cliente.controller.js";

const router = Router();

router.get("/Clientes", getClientes);
router.get("/Cliente/:id", getCliente);
router.post("/Cliente", CreateCliente);
router.put("/Cliente/:id", updateCliente);
router.delete("/Cliente/:id", deleteCliente);


export default router;
