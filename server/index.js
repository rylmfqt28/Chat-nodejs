var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get("/", function(req, res){
    res.status(200).send('Hello your connection at server is successful')
});

server.listen(6677, function(){
    console.log('Server running in the port: 6677');
});