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

	console.log("An entity has connected to the server.");
	socket.id = Math.random();
	socket.isMultiplayer = null;
	socket.room = null; 
	socket.instrument = null; 
	socket.name = 'NoName'; 
	SOCKET_LIST[socket.id] = socket; 

	function displayNames(room) {
		var members = [];
		for (var i in SOCKET_LIST) {
			if (room == SOCKET_LIST[i].room) {
				members.push(SOCKET_LIST[i].name); //Normally socket_list[i].id
			}
		}
		return members; //Return id's of people in the room
	}
	
	socket.on('gameSetting', function(boole) {
		socket.isMultiplayer = boole; 
		console.log(socket.isMultiplayer); 
	});

	socket.on('chooseInstrument', function(instrum) {
		socket.instrument = instrum;
		console.log(socket.instrument); 
	});

	socket.on('updateUsername', function(username) {
		socket.name = username; 
	});

	socket.on('newRoom', function(roomNumber) {
		if (roomNumber in roomList) {
			socket.emit('invalidRoom');
		} else {
			roomList[roomNumber] = 1; 
			socket.room = roomNumber; 
			socket.emit('lobby'); 
		}

		console.log(roomNumber);
	});

	socket.on('joinRoom', function(roomNumber) {
		if (roomNumber in roomList) {
			roomList.roomNumber += 1; 
			socket.room = roomNumber;
			socket.emit('lobby');
		} else {
			socket.emit('invalidRoom'); 
		}

		console.log("-------------"); 
		for (var i in SOCKET_LIST) {
			if (SOCKET_LIST[i].room == roomNumber) {
				temp = SOCKET_LIST[i]; 
				console.log(temp.id);
			}
		}
	});

	socket.on('whatRoom', function() {
		socket.emit('roomNumber', socket.room);
	});

	socket.on('showPlayers', function(roomNumber) {
		var members = displayNames(roomNumber); //the ID's of members.

		for (var i in SOCKET_LIST) {
			if (SOCKET_LIST[i].room == roomNumber) {
				temp = SOCKET_LIST[i]; 
				temp.emit('displayNames', members, roomNumber);
			}
		}
	});

	socket.on('globalSound', function(number) {
		console.log("global?"); 
		var roomNumber = socket.room;

		if (roomNumber !== null) {
			for (var i in SOCKET_LIST) {
				if (SOCKET_LIST[i].room == roomNumber) {
					temp = SOCKET_LIST[i];
					temp.emit('playSound', number);
				}
			}			
		}
	});

	socket.on('Yolotest', function() {
		console.log("YOLOOOOOOOOOOO");
	});

	//Quit functionality below
	socket.on('disconnect', function() {
		var roomNumber = socket.room;
		delete SOCKET_LIST[socket.id]; 
		var members = displayNames(roomNumber); //the ID's of members.

		for (var i in SOCKET_LIST) {
			if (SOCKET_LIST[i].room == roomNumber) {
				temp = SOCKET_LIST[i]; 
				temp.emit('displayNames', members, roomNumber);
			}
		}
		//Add more functionality later..

	});


});
