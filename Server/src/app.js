import express from "express";
import morgan from "morgan";
import clienteroutes from "./routes/Cliente.routes.js";
import especiesroutes from "./routes/Especie.routes.js";
import cuidadosroutes from "./routes/Cuidados.routes.js"
import vacunasregistradasroutes from "./routes/VacunasRegistradas.routes.js";
import macotasroutes from "./routes/Mascota.routes.js"

import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", clienteroutes, especiesroutes, cuidadosroutes, vacunasregistradasroutes, macotasroutes);

export default app;
