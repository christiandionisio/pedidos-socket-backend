
const { registrarFactura } = require('../controllers/facturas');
const { io } = require('../index');

// Mensajes de Sockets
io.on('connection', (client) => {
    console.log('Cliente conectado');

    // Ingresar a un usuario a una sala especifica
    // Sala Global, cliend.id, {uid}
    // client.join(uid);
    
    // Registrar pedidos y notificar al administrador
    client.on('ejecutar-pedido', async (payload) => {
        console.log('Ejecutar pedido', payload);
        try {
            const response = await registrarFactura(payload);
            console.log(response.headers);

            // TODO: Registrar pedidos en la base de datos
            
        } catch (error) {
            console.log(error.response.status);
        }

        // TODO: Notificar al administrador        

        // io.to(payload.para).emit('mensaje-personal', payload);
        //io.emit('recibir-pedido', payload);
    });

    client.on('estado-pedido', (payload) => {
        // io.to(payload.para).emit('mensaje-personal', payload);
        io.emit('ejecutar-pedido', payload);
        console.log('Estado del pedido');
    });


});
