import { Router } from "express";
import {
  getEspecies,
  getEspecie,
  CreateEspecie,
  deleteEspecie,
  updateEspecie,
} from "../controllers/Especie.controller.js";

const router = Router();

router.get("/Especies", getEspecies);
router.get("/Especie/:id", getEspecie);
router.post("/Especie", CreateEspecie);
router.put("/Especie/:id", updateEspecie);
router.delete("/Especie/:id", deleteEspecie);


export default router;

