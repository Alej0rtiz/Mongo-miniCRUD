import cliente from '../modelo/cliente.js';

export const crearCliente = async (request, response) => {

    try {
        const nuevo = new cliente(request.body);    // Crear nuevo documento con datos del cliente
        const guardado = await nuevo.save();        // Guardar en MongoDB
        response.status(201).json({mensaje: 'cliente guardado', guardado});
    } catch (error) {
        console.error("❌ Error al guardar cliente:", error.message);
        response.status(400).json({ mensaje: 'Error al guardar cliente', error });
    }
}

export const mostrarClientes = async (request, response) => {

    try {
        const clientes = await cliente.find();  // Obtener todos los clientes
        response.json(clientes);                // Enviar como JSON
    } catch (error) {
        console.error("❌ Error al obtener clientes:", error.message);
        response.status(500).json({ mensaje: 'Error al obtener los clientes', error });
    
    }};
