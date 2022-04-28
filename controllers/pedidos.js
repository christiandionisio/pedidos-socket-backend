const axios = require('axios').default;

const registrarPedido = (pedido, token) => {
    return axios.post('http://localhost:8080/pedidos', pedido, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

}


module.exports = {
    registrarPedido
}