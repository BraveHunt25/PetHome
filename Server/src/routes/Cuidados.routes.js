import { Router } from "express";
import {
  getCuidados,
  getCuidado,
  CreateCuidado,
  deleteCuidado,
  updateCuidado,
} from "../controllers/Cuidado.controller.js";

const router = Router();

router.get("/Cuidados", getCuidados);
router.get("/Cuidado/:id", getCuidado);
router.post("/Cuidado", CreateCuidado);
router.put("/Cuidado/:id", updateCuidado);
router.delete("/Cuidado/:id", deleteCuidado);


export default router;