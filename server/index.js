import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
import buscarHospedajesRoutes from './routes/buscarHospedajes.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(buscarHospedajesRoutes);

app.listen(PORT);
console.log(`El servidor corre en el puerto ${PORT}`)