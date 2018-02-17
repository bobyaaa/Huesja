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

io.sockets.on('connection', function(socket) {

	console.log("An entity has connected to the server.");
	socket.id = Math.random();
	socket.isMultiplayer = null;
	socket.room = null; 
	socket.instrument = null; 
	SOCKET_LIST[socket.id] = socket; 
	
	socket.on('gameSetting', function(boole) {
		socket.isMultiplayer = boole; 
		console.log(socket.isMultiplayer); 
	});

	//Quit functionality below

});
