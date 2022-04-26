
const { io } = require('../index');

// Mensajes de Sockets
io.on('connection', (client) => {
    console.log('Cliente conectado');

    // TODO: Verificar autenticacion

    console.log('Cliente Autenticado');

    // Ingresar a un usuario a una sala especifica
    // Sala Global, cliend.id, {uid}
    // client.join(uid);
    
    // Escuchar del cliente el mensaje-personal
    client.on('ejecutar-pedido', async (payload) => {
        // TODO: grabar mensaje
        console.log('Ejecutar pedido', payload);

        // io.to(payload.para).emit('mensaje-personal', payload);
        io.emit('ejecutar-pedido', payload);
    });

    client.on('estado-pedido', (payload) => {
        // io.to(payload.para).emit('mensaje-personal', payload);
        io.emit('ejecutar-pedido', payload);
        console.log('Estado del pedido');
    });


});
