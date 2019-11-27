var express = require('express');
var mysql = require('mysql');
var app = express();
const db = require('./config/db');

var server = require('http').Server(app);
var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
var io = require('socket.io')(server);
var connection = mysql.createConnection({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
});
connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!!!');
});
server.listen(port, () => console.log('Server running in port ' + port));

io.on('connection', function(socket) {
    console.log(socket.id + ': connected');
    socket.emit('id', socket.id);

    socket.on('disconnect', function() {
        console.log(socket.id + ': disconnected');
    });

    socket.on('newMessage', data => {
        io.sockets.emit('newMessage', { data: data, id: socket.id });
        console.log(data);
    });
});

app.get('/', (req, res) => {
    res.send('Home page. Server running okay.');
});
