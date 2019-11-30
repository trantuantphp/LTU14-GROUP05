// db
var mysql = require('mysql');

var connectDB = mysql.createPool({
    host: '134.209.104.85',
    user: 'root',
    password: 'Thutrang22$$',
    database: 'chat_dds'
});

module.exports = connectDB;
