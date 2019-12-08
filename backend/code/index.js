var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var server = require('http').Server(app);
var io = require('socket.io')(server);

const port = 8282;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(morgan('dev'));
app.use(bodyParser.json());
server.listen(port, () => console.log('Server running in port ' + port));

var list_online = [];
io.on('connection', function(socket) {
    socket.user_info = {
        username: '',
        id: null,
        socket: '',
        list_room: []
    };
    let { user_info } = socket;
    console.log('Welcome ' + socket.id);
    socket.on('disconnect', function() {
        console.log(socket.user_info.username + ' disconnect');
        list_online.splice(list_online.indexOf(socket.user_info.username), 1);
        io.sockets.emit('getListOnline', list_online);
    });
    socket.on('login', function(data) {
        user_info.username = data.username;
        user_info.id = data.id;
        user_info.socket = socket.id;
        list_online.push(socket.user_info);
        io.sockets.emit('getListOnline', list_online);
    });
    socket.on('getListRoom', function(data) {
        for (let i = 0; i < data.length; i++) {
            socket.join(data[i]);
        }
    });
    socket.on('createRoom', function(data) {
        const { id, creator_id } = data;
    });
    socket.on('addRoomMember', function(data) {
        const { room_id, member_id } = data;
    })
    socket.on('sendPrivateMessage', function(data) {
        const { socket, receiver_id, sender_id, type, value } = data;
        io.to(socket).emit('receivePrivateMessage', {value, type});
    });
    socket.on('sendRoomMessage', function(data) {
        const { receiver_id, sender_id, type, value } = data;
        io.sockets.in(receiver_id).emit('receiveGroupMessage', {value, type});
    });
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(err.stack);
});

const Router = require('./src/router');

//admin router
var admin_router = require('./src/Admin');
app.use('/admin', admin_router);
app.use('/user', Router.User);
app.use('/file', Router.File);
app.use('/room', Router.Room);

app.get('/', (req, res) => {
    res.render('home');
});
