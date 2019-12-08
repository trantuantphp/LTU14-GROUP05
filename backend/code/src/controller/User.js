const bcrypt = require('bcrypt');
const param = require('../../common/param');
const { msg, errorCode } = param;
const models = require('../models');
const { User } = models;

module.exports = {
    getAllUser: async req => {
        const { headers } = req;
        try {
            let data = await User.findAll({
                where: {
                    status: 1
                },
                attributes: ['id', 'username', 'name', 'avatar', 'status']
            });
            if (data) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].avatar) {
                        data[i].avatar =
                            headers.host + '/file/image/' + data[i].avatar;
                    }
                }
                return {
                    errorCode: errorCode.callAPI.success,
                    msg: 'Lấy dữ liệu thành công',
                    data: data
                };
            } else {
                return {
                    errorCode: 1,
                    msg: 'Không có dữ liệu'
                };
            }
        } catch (error) {
            console.log(error);
            return error.json();
        }
    },
    getUserDetail: async req => {
        const { headers } = req;
        const { id } = req.body;
        let data = await User.findOne({
            where: {
                id: id,
                status: 1
            },
            attributes: ['username', 'name', 'avatar']
        });
        if (data) {
            if (data.avatar) {
                data.avatar = headers.host + '/file/image/' + data.avatar;
            }
            return {
                errorCode: errorCode.callAPI.success,
                msg: 'Lấy dữ liệu thành công',
                data: data
            };
        } else {
            return {
                errorCode: 1,
                msg: 'Không có dữ liệu'
            };
        }
    },
    addUser: async req => {
        const { username, password, name, avatar } = req.body;
        let data = await User.findOne({
            where: {
                username: username,
                status: 1
            }
        });
        if (!data) {
            const saltRounds = 10;
            let hash_password = bcrypt.hashSync(password, saltRounds);
            User.create({
                username: username,
                password: hash_password,
                name: name,
                avatar: avatar
            });
            return {
                errorCode: errorCode.callAPI.success,
                msg: msg.model.addRecord.success
            };
        } else {
            return {
                errorCode: errorCode.callAPI.success,
                msg: msg.model.login.inexist
            };
        }
    },
    login: async req => {
        const { username, password } = req.body;
        let data = await User.findOne({
            where: {
                username: username,
                status: 1
            },
            attributes: ['username', 'name', 'avatar']
        });
        if (!data) {
            return {
                errorCode: errorCode.callAPI.success,
                msg: msg.model.login.inexist
            };
        } else {
            let hash_password = await User.findOne({
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
                return {
                    errorCode: errorCode.callAPI.success,
                    msg: msg.model.login.success,
                    data: data
                };
            } else {
                return {
                    errorCode: errorCode.callAPI.success,
                    msg: msg.model.login.failed
                };
            }
        }
    },
    getListRoom: async req => {
        const { id } = req.body;
        let data = await User.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'username'],
            include: [
                {
                    as: 'rooms',
                    model: models.Room,
                    attributes: ['id', 'name'],
                    through: {
                        attributes: ['status']
                    }
                }
            ]
        });
        return data;
    }
};
