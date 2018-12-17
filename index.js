var express = require('express');
var socket  = require('socket.io');

//app setup
var app = express();
var server = app.listen(4000);


//statci files
app.use(express.static('public'));


//setup socket
var io = socket(server);

io.on('connection',function(socket){
    console.log('a user connected');
    //handle chat event
    socket.on('chat',function(data){
        io.sockets.emit('chat',data)
    });
    //handle chat typing
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });

});