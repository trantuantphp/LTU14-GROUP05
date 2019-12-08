const express = require('express');
const message_router = express.Router();

const MessageController = require('../controller/Message');

message_router.post('/list', async function(req, res) {
    let data = await MessageController.getListMessage(req);
    return res.json(data);
});
message_router.post('/send', async function(req, res) {
    let data = await MessageController.sendMessage(req);
    return res.json(data);
});

module.exports = message_router;
