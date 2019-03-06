var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('disconnect', function () {
        console.log('disconnected');
    });

    socket.emit('getcode', 'sldfkjakfjaflk');
    socket.on('code', function (data) {
        console.log(data);
    })
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});