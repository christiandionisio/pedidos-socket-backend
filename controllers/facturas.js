const axios = require('axios').default;

const registrarFactura = (payload) => {
    return axios.post('http://localhost:8080/facturas', payload, {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbIlJPTEVfQURNSU4iXSwic3ViIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjUxMDMwMDUzLCJleHAiOjE2NTEwMzE4NTN9.QUGyB1-T1dEXSWxM_pxrBK00Ibcds5NsA8NrT9oP13gZwYfLkZ4_-4iUx8YONNyxMGmEsvhBO5LkfYaaqJ1p0w`
        }
    });

}


module.exports = {
    registrarFactura
}