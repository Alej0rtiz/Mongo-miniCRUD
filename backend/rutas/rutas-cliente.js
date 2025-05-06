import express from 'express';

import { crearCliente, mostrarClientes } from '../controlador/controlador-cliente.js';

const router = express.Router();

router.post('/', crearCliente);

router.get('/', mostrarClientes);


export default router;