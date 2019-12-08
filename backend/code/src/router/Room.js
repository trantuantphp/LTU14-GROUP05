const express = require('express');
const room_router = express.Router();

const RoomController = require('../controller/Room');

room_router.post('/', async function(req, res) {
    let data = await RoomController.getListMember(req);
    return res.json(data);
});
room_router.post('/create', async function(req, res) {
    let data = await RoomController.createRoom(req);
    return res.json(data);
});
room_router.post('/add', async function(req, res) {
    let data = await RoomController.addMember(req);
    return res.json(data);
})

module.exports = room_router;
