const express = require('express');
const user_router = express.Router();

var User = require('./UserModel');

user_router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
        User.getUserById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        User.getAllUser(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

module.exports = user_router;
