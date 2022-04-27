
const { registrarFactura } = require('../controllers/facturas');
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

        const factura = {
            idCliente: '6191df9498f460487f808242',
            estado: 'PENDIENTE'
        }

        try {
            const response = await registrarFactura(factura);
            console.log(response.headers);
            
        } catch (error) {
            console.log(error.response.status);
        }



        

        // io.to(payload.para).emit('mensaje-personal', payload);
        //io.emit('recibir-pedido', payload);
    });

    client.on('estado-pedido', (payload) => {
        // io.to(payload.para).emit('mensaje-personal', payload);
        io.emit('ejecutar-pedido', payload);
        console.log('Estado del pedido');
    });


});
