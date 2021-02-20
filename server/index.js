var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get("/", function(req, res){
    res.status(200).send('Hello your connection at server is successful')
});

var messages = [{
    id: 1,
    text: 'Bienvenido al chat',
    nickname: 'Bot loco'
}];

io.on('connection', function(socket){
    console.log('New machine connected IP: ' + socket.handshake.address);
    socket.emit('messages', messages);

    socket.on('add-message', function(data){
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

server.listen(6677, function(){
    console.log('Server running in the port: 6677');
});