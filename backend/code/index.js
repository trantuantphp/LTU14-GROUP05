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
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );

    // Request headers you wish to allow
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
    // console.error(err.stack);
    // res.send(err.stack);
});

var list_online = [];
io.on('connection', function(socket) {
    socket.user_info = {
        username: '',
        id: null,
        socket: ''
    };
    socket.list_room = [];
    let { user_info, list_room } = socket;
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
    socket.on('joinListRoom', function(data) {
        list_room = data;
        for (let i = 0; i < list_room.length; i++) {
            socket.join(list_room[i]);
        }
    });
    socket.on('createRoom', function(data) {
        const { id } = data;
        socket.join(id);
    });
    socket.on('addMember', function(data) {
        const { room_id, socket_id, member_id } = data;
        io.to(socket_id).emit('addRoomMember', room_id);
    });
    socket.on('joinRoom', function(room_id) {
        socket.join(room_id);
    });
    socket.on('sendMessage', function(data) {
        const {
            socket,
            receiver_id,
            sender_id,
            type,
            value,
            receiver_type
        } = data;
        // console.log(data);
        switch (receiver_type) {
            case 1:
                io.to(socket).emit('receiveMessage', data);
                break;
            case 2:
                io.in(receiver_id).emit('receiveMessage', data);
                break;
        }
    });
});


const Router = require('./src/router');

//admin router
var admin_router = require('./src/Admin');
app.use('/admin', admin_router);
app.use('/user', Router.User);
app.use('/file', Router.File);
app.use('/room', Router.Room);
app.use('/message', Router.Message);

app.get('/', (req, res) => {
    res.render('home');
});
