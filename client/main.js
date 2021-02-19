var socket = io.connect('http://192.168.0.6:6677', {'forceNew': true});

socket.on('messages', function(data){
    console.log(data);
});