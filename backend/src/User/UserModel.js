var db = require('../../config/db');
var table = 'tb_user';

var User = {
    getAllUser: function(callback) {
        return db.query('Select * from ' + table, callback);
    },
    getUserById: function(id, callback) {
        return db.query(
            'Select * from ' + table + ' where id=?',
            [id],
            callback
        );
    }
};

module.exports = User;
