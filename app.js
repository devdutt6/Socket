const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static('public'));

var server = app.listen(3000 , () => {
    console.log('3000')
})

var io = socket(server);

io.on('connection', (socket) => {
    console.log('made a socket connection')
    console.log(socket.id)

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })
})