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
var list_room = [];
io.on('connection', function(socket) {
    socket.user_info = {};
    let { user_info } = socket;
    console.log('Welcome ' + socket.id);
    socket.on('disconnect', function() {
        console.log(socket.id + ' disconnect');
    });
    socket.on('login', function(data) {
        user_info.username = data.username;
        list_room.push(data.username);
        console.log(socket.user_info);
        socket.emit('getListUserLogin', list_room);
    });
    socket.on('getListRoom', function (data) {
        for (let i = 0; i < data.length; i++) {
            socket.join(data[i]);
        }
    })
})

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(err.stack);
});
// var router = express.Router();
// router.use(function(req, res, next) {
//     // console.log(req.headers.host);
//     next();
// });
// app.use('/', router);

// user router
var user_router = require('./src/User/UserRouter');
app.use('/user', user_router);

// file router
var file_router = require('./src/File/FileRouter');
app.use('/file', file_router);

//room router
var room_router = require('./src/Room/RoomRouter');
app.use('/room', room_router);

app.get('/', (req, res) => {
    res.render('home');
});
