import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import conexion from './config/db.js';
import rutas from './rutas/rutas-cliente.js';


dotenv.config();

const app = express();
conexion();

app.use(cors());

app.use(express.json());

app.use('/api/clientes', rutas);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Backend corriendo en puerto ${PORT}`));

