import { Router } from "express";
import {
  renderSignUp,
  signUp,
  signIn,
  renderSignIn,
  logout,
} from "../controllers/auth.controller.js";
import { validator } from "../middlewares/validator.middleware.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";

const router = Router();

// SIGNUP
router.get("/signup", renderSignUp);
router.post("/signup", validator(signupSchema), signUp);

// SINGIN
router.get("/Login", renderSignIn);
router.post("/Login", validator(signinSchema), signIn);

router.get("/logout", logout);

export default router;
