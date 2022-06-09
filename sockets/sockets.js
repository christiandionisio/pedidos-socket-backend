
const { registrarFactura, modificarEstadoFactura } = require('../controllers/facturas');
const { registrarPedido } = require('../controllers/pedidos');
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
            const responseFactura = await registrarFactura(payload);
            const idFactura = responseFactura.headers.facturaid;

            if (payload.pedidos) {
                payload.pedidos.forEach( async (pedido) => {
                    await registrarPedido({ idFactura, ...pedido }, payload.token);
                });
            } else {
                console.log('No hay pedidos para registrar');
            }
            
            io.emit('recibir-pedido', idFactura);

        } catch (error) {
            console.log('Error ', error.response.status);
        }

        // io.to(payload.para).emit('mensaje-personal', payload);
    });

    client.on('atender-pedido', async (payload, callback) => {

        console.log('Atender pedido', payload);

        try {
            const responseFactura = await modificarEstadoFactura(payload);
            if (responseFactura.status === 204) {
                callback('OK');
                io.emit('escuchar-estado-pedido', payload.factura.id);
            }


        } catch (error) {
            callback('ERROR');
            console.log('Error ', error.response.status);
        }
        
    });

    client.on('confirmar-pedido-listo', async (payload, callback) => {

        console.log('Pedido listo socket', payload);

        try {
            const responseFactura = await modificarEstadoFactura(payload);
            if (responseFactura.status === 204) {
                callback('OK');
                io.emit('escuchar-pedido-en-camino', payload.factura.id);
            }


        } catch (error) {
            callback('ERROR');
            console.log('Error ', error.response.status);
        }
        
    });

});
