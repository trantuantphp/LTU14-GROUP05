const express = require('express');
const bcrypt = require('bcrypt');

const admin_router = express.Router();

const models = require('./models');
const { Admin } = models;

const param = require('../common/param');
const { msg, errorCode } = param;

admin_router.post('/login', async function(req, res) {
    const { username, password } = req.body;
    let data = await Admin.findOne({
        where: {
            username: username
        },
    });
    if (!data) {
        return res.json({
            errorCode: errorCode.callAPI.success,
            msg: msg.model.login.inexist
        });
    } else {
        let hash_password = await Admin.findOne({
            where: {
                username: username
            },
            attributes: ['password']
        });
        let check_password = bcrypt.compareSync(
            password,
            hash_password.password
        );  
        if (check_password) {
            return res.json({
                errorCode: errorCode.callAPI.success,
                msg: msg.model.login.success,
            });
        } else {
            return res.json({
                errorCode: errorCode.callAPI.success,
                msg: msg.model.login.failed
            });
        }
    }
});

module.exports = admin_router;