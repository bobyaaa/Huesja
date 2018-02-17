var express = require('express');
var path = require('path');
var app = express(); 
var http = require('http').Server(app);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

http.listen(2000, function() {
	console.log("Server started."); 
});

app.use(express.static(path.join(__dirname, 'client')));

var io = require('socket.io')(http,{}); 
var SOCKET_LIST = {};
var roomList = {};

io.sockets.on('connection', function(socket) {

	console.log("someone has entered the room");
	socket.id = Math.random();
	socket.room = 0; 
	SOCKET_LIST[socket.id] = socket; 

	socket.emit('Enter');
});
