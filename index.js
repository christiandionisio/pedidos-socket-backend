const express = require('express');

// Crear el servidor de express
const app = express();


// Escuuchar peticiones
app.listen(3001, () => {
    console.log(`Servidor corriendo en puerto ${3001}`);
});
