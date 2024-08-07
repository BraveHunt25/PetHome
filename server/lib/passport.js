import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import { pool } from "../database.js";
import { matchPassword } from "./helpers.js";

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const [rows] = await pool.query("SELECT * FROM acceso WHERE CORREO_ELECTRONICO_PRIMARIO  = ?", [
        email,
      ]);

      if (!rows.length) {
        await req.setFlash("error", "No user found");
        return done(null, false);
      }

      const user = rows[0];
      const validPassword = await matchPassword(password, user.password);

      if (!validPassword) {
        await req.setFlash("error", "Incorrect Password");
        return done(null, false);
      }

      done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const [rows] = await pool.query("SELECT * FROM cliente WHERE ID_CLIENTE = ?", [id]);
  done(null, rows[0]);
});
