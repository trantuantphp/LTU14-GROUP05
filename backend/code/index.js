var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var server = require('http').Server(app);
var multer = require('multer');
var fs = require('fs');
const port = 8282;
app.use(morgan('dev'));
app.use(bodyParser.json());
server.listen(port, () => console.log('Server running in port ' + port));

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(err.stack);
});
var router = express.Router();
router.use(function(req, res, next) {
    console.log(req.headers.host);
    next();
});
app.use('/', router);

// user router
var user_router = require('./src/User/UserRouter');
app.use('/user', user_router);

// file router
var file_router = require('./src/File/FileRouter');
app.use('/file', file_router);

app.get('/', (req, res) => {
    res.send('Home page. Server running okay.');
});
