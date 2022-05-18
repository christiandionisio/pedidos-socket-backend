const axios = require('axios').default;

// {
//     token: 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbIlJPTEVfQURNSU4iXSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjUxMDMwMDUzLCJleHAiOjE2NTEwMzE4NTN9.QUGyB1-T1dEXSWxM_pxrBK00Ibcds5NsA8NrT9oP13gZwYfLkZ4_-4iUx8YONNyxMGmEsvhBO5LkfYaaqJ1p0w',
//     factura: {
//         idCliente: '6191df9498f460487f808242',
//         estado: 'PENDIENTE'
//     }
// }

// {
//     token: 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbIlJPTEVfQURNSU4iXSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjUxMTE1NTgxLCJleHAiOjE2NTExMTczODF9.KnMqGYFnudbTbrqf9SAJqCitlU0RoYoZgcnSQF-acYvQv_vUTCYCfJ3ZbR2ANHIIyyKmanbOLD5TA4RFcu2q6g',
//     factura: {
//         idCliente: '6191df9498f460487f808242',
//         estado: 'HOLA DESDE SOCKETS3'
//     },
//     pedidos: [
//         {
//             idProducto: "61874ca4e62d9f50d192b3fc",
//             cantidad: 2
//         },
//         {
//             idProducto: "61874ca4e62d9f50d192b3fc",
//             cantidad: 1
//         },
//         {
//             idProducto: "61874ca4e62d9f50d192b3fc",
//             cantidad: 3
//         }
//     ]
// }

const registrarFactura = (payload) => {
    return axios.post('http://localhost:8080/facturas', payload.factura, {
        headers: {
            'Authorization': `Bearer ${payload.token}`
        }
    });

}


const modificarEstadoFactura = (payload) => {
    return axios.put('http://localhost:8080/facturas', payload.factura, {
        headers: {
            'Authorization': `Bearer ${payload.token}`
        }
    });

}

const buscarFacturaPorId = (payload) => {
    return axios.get('http://localhost:8080/facturas', payload.factura.id, {
        headers: {
            'Authorization': `Bearer ${payload.token}`
        }
    });

}

module.exports = {
    registrarFactura,
    modificarEstadoFactura,
    buscarFacturaPorId
}