const param = require('../../common/param');
const { msg, errorCode } = param;
const models = require('../models');
const { Message } = models;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    getListMessage: async req => {
        const { receiver_type, receiver_id, sender_id } = req.body;
        if (receiver_type == 2) {
            let data = await Message.findAll({
                where: {
                    receiver_id: receiver_id,
                    receiver_type: receiver_type,
                    status: 1
                }
            });
            return {
                errorCode: errorCode.callAPI.success,
                msg: 'Done',
                data: data
            };
        } else if (receiver_type == 1) {
            let data = await Message.findAll({
                where: {
                    status: 1,
                    [Op.or]: [
                        {
                            receiver_id: receiver_id
                        },
                        {
                            receiver_id: sender_id
                        }
                    ]
                }
            });
            return {
                errorCode: errorCode.callAPI.success,
                msg: 'Done',
                data: data
            };
        }
        
    },
    sendMessage: async req => {
        const {
            type,
            value,
            sender_id,
            receiver_id,
            receiver_type,
            file_name,
            file_original_name
        } = req.body;
        let data = await Message.create({
            type,
            value,
            sender_id,
            receiver_id,
            receiver_type,
            file_name,
            file_original_name
        });
        return {
            errorCode: 0,
            msg: 'Gửi tin nhắn thành công',
            data: data
        }
    }
};
