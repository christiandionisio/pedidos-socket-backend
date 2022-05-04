const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

// Crear el servidor de express
const app = express();


// Lectura y parseo del Body
app.use(express.json());

const server = http.createServer(app);

// Iniciar servidor socket.io
module.exports.io = new Server(server, { cors: {origin : '*'} });
require('./sockets/sockets');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });


// Escuuchar peticiones
server.listen(3001, () => {
    console.log(`Servidor corriendo en puerto ${3001}`);
});
