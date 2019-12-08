const express = require('express');
const user_router = express.Router();

var UserController = require('./UserController');

user_router.post('/', async function(req, res, next) {
    let data = await UserController.getAllUser(req);
    return res.json(data);
});
user_router.post('/detail', async function(req, res) {
    let data = await UserController.getUserDetail(req);
    return res.json(data);
});
user_router.post('/add', async function(req, res) {
    let data = await UserController.addUser(req.body);
    return res.json(data);
})
user_router.post('/login', async function(req, res) {
    let data = await UserController.login(req);
    return res.json(data);
});
user_router.post('/room', async function(req, res) {
    let data = await UserController.getUserRoom(req.body);
    return res.json(data);
})

module.exports = user_router;
