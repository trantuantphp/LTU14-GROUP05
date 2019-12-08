const express = require('express');
const room_router = express.Router();

var RoomController = require('./RoomController');

room_router.post('/', async function(req, res) {
    let data = await RoomController.getListMember(req.body);
    return res.json(data);
});

module.exports = room_router;