import { Router } from "express";
import {
  getMascotas,
  getMascota,
  CreateMascota,
  deleteMascota,
  updateMascota,
} from "../controllers/Mascota.controller.js";

const router = Router();

router.get("/Mascotas", getMascotas);
router.get("/Mascota/:id", getMascota);
router.post("/Mascota", CreateMascota);
router.put("/Mascota/:id", updateMascota);
router.delete("/Mascota/:id", deleteMascota);


export default router;
