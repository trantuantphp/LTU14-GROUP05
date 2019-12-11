const express = require('express');
const user_router = express.Router();

const UserController = require('../controller/User');

user_router.post('/', async function(req, res) {
    let data = await UserController.getAllUser(req);
    console.log(res.header());
    return res.json(data);
});
user_router.post('/detail', async function(req, res) {
    let data = await UserController.getUserDetail(req);
    return res.json(data);
});
user_router.post('/add', async function(req, res) {
    let data = await UserController.addUser(req);
    return res.json(data);
});
user_router.post('/room', async function(req, res) {
    let data = await UserController.getListRoom(req);
    return res.json(data);
});
user_router.post('/login', async function(req, res) {
    let data = await UserController.login(req);
    return res.json(data);
});

module.exports = user_router;
