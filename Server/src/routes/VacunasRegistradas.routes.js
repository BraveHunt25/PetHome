import { Router } from "express";
import {
  getVacunas,
  getVacuna,
  CreateVacuna,
  deleteVacuna,
  updateVacuna,
} from "../controllers/VacunasRegistradas.contoller.js";

const router = Router();

router.get("/Vacunas", getVacunas);
router.get("/Vacuna/:id", getVacuna);
router.post("/Vacuna", CreateVacuna);
router.put("/Vacuna/:id", updateVacuna);
router.delete("/Vacuna/:id", deleteVacuna);


export default router;