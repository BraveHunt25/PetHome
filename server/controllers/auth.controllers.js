import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../db.js";

export const renderSignUp = (req, res) => res.render("auth/signup");

export const signUp = async (req, res, next) => {
  const { email,
    password1,
    curp,
    nombres,
    primer_apellido,
    segundo_apellido,
    calle,
    numero_calle,
    nombre_colonia,
    nombre_municipio,
    codigo_postal, entidad,
    numero_tel } = req.body;

  const password = await encryptPassword(password1);

  // Saving in the Database
  const [result_cliente] = await pool.query("INSERT INTO CLIENTE(CURP, NOMBRES_CLIENTES, PRIMER_APELLIDO, SEGUNDO_APELLIDO) VALUES (?, ?, ?, ?)", {
    curp,
    nombres,
    primer_apellido,
    segundo_apellido
  });

  const [result_acceso] = await pool.query("INSERT INTO ACCESO(CORREO_ELECTRONICO_PRIMARIO, CLIENTES_ID_CLIENTE, CONTRASEÑA) VALUES (?, ?, ?)", {
    email,
    id: result_cliente.insertId,
    password
  });

  const [result_referencia] = await pool.query("INSERT INTO DIRECCION_REFERENCIA(CALLE_REFERENCIA, NUMERO_CALLE_REFERENCIA, NOMBRE_COLONIA_REFERENCIA, NOMBRE_MUNICIPIO_REFERENCIA, CODIGO_POSTAL_REFERENCIA, ENTIDAD_REFERENCIA, CLIENTES_ID_CLIENTE) VALUES (?, ?, ?, ?, ?, ?, ?)", {
    calle,
    numero_calle,
    nombre_colonia,
    nombre_municipio,
    codigo_postal,
    entidad,
    id: result_cliente.insertId
  });

  const [result_telefonos] = await pool.query("INSERT INTO NUMERO_CONTACTO_CLIENTES(NUMERO_TELEFONICO_CIENTES, CLIENTES_ID_CLIENTE) VALUES (?, ?);", {
    numero_tel,
    id: result_cliente.insertId
  });

  req.login(
    {
      id: result.insertId,
      email,
    },
    (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/");
    }
  );
};

export const renderSignIn = (req, res) => {
  res.render("auth/signin");
};

export const signIn = passport.authenticate("local.signin", {
  successRedirect: "/",
  failureRedirect: "/Login",
  passReqToCallback: true,
  failureFlash: true,
});

export const logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/Login");
  });
};
