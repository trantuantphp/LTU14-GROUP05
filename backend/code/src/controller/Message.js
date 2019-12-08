const param = require('../../common/param');
const { msg, errorCode } = param;
const models = require('../models');
const { Message } = models;

module.exports = {
    getListMessage: async req => {
        const { id } = req.body;
        let data = await Message.findAll({
            where: {
                receiver_id: id
            }
        });
        return {
            errorCode: errorCode.callAPI.success,
            data: data
        };
    },
    sendMessage: async req => {
        const { type, value, sender_id, receiver_id, receiver_type } = req.body;
        let data = await Message.create({
            type,
            value,
            sender_id,
            receiver_id,
            receiver_type
        });
        return {
            errorCode: 0,
            msg: 'Gửi tin nhắn thành công',
            data: data
        }
    }
};
