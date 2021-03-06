const socket = io.connect('http://localhost:3000');

const message = document.getElementById('message');
const handle = document.getElementById('handle');
const button = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

button.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
    message.value = "";
})

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
})

socket.on('chat', (data) => {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
})

socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + " is typing...</em></p>";
})