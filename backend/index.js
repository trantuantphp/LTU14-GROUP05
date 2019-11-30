var express = require('express');
var app = express();
var server = require('http').Server(app);
const db = require('./config/db');

var port = 8282;
server.listen(port, () => console.log('Server running in port ' + port));
var routes = require('./src/User/UserRouter');
app.use('/user', routes);
app.get('/', (req, res) => {
    res.send('Home page. Server running okay.');
});
