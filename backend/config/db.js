import mongoose from "mongoose";

const conexion = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI);  // URL obtenida desde variables de entorno
        console.log("Conectado exitosamente a MongoDB Atlas");
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error);
    }
}

export default conexion;