"use strict";
var port = 4000;

var
    app = require('http').createServer(handler),
    io = require('socket.io')(app),
    redis = require('redis'),
    fs = require('fs'),
    redisClient = redis.createClient();

app.listen(port);

var welcome = 'PocketLawyer comet server running at http://127.0.0.1:' + port;

console.log(welcome);

function handler(req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}


function canJoin(socket, roomId) {
    console.info(socket.request.headers.cookie);
}

io.use(function(socket, next){
    return next();
    // if (socket.request.headers.cookie) return next();
    // canJoin(socket, 1);
    // next(new Error('Authentication error'));
});

const chat = io.of('chat');

/***
 Redis Channels Subscribes
 ***/
redisClient.subscribe('chat.conversations');
redisClient.subscribe('chat.messages');

/***
 Redis Events
 ***/
redisClient.on('message', function (channel, message) {
    var result = JSON.parse(message);
    console.log('message > ', message);

    io.to('admin').emit(channel, 'channel -> ' + channel + ' |  room -> ' + result.room);
    chat.to(result.room).emit(channel, result.data);
});

/***
 Socket.io Connection Event
 ***/


chat.on('connection', function (socket) {
    socket.emit('welcome', {message: welcome});

    /***
     Socket.io Events
     ***/

    socket.on('join', function (data) {
        // socket.rooms.forEach(function (room) {
        //     socket.leave(room);
        // });

        socket.join(data.room);
        socket.emit('joined', {message: 'Joined room: ' + data.room});
    });
});
