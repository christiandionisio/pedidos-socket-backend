const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

// Crear el servidor de express
const app = express();

// Lectura y parseo del Body
app.use(express.json());

const server = http.createServer(app);

// Iniciar servidor socket.io
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

// Test coneccion socket.io
io.on('connection', (socket) => {
    console.log('a user connected');
});

// Escuuchar peticiones
server.listen(3001, () => {
    console.log(`Servidor corriendo en puerto ${3001}`);
});
