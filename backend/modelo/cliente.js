import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({

    cedula: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true }
    //,{ strict: false }        o    infoAdicional: mongoose.Schema.Types.Mixed
})

const cliente = mongoose.model("cliente", clienteSchema);

export default cliente;