const bcrypt = require('bcrypt');
var User = require('./UserModel');
const { method } = User;

var UserController = {
    getAllUser: async req => {
        const { headers } = req;
        try {
            let data = await method.getAllUser();
            if (data) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].avatar) {
                        data[i].avatar =
                            headers.host + '/file/image/' + data[i].avatar;
                    }
                }
                return {
                    errorCode: 0,
                    msg: 'Lấy dữ liệu thành công',
                    data: data
                };
            } else {
                return {
                    errorCode: 1,
                    msg: 'Không có dữ liệu',
                    data: data
                };
            }
        } catch (error) {
            console.error(error);
            return error;
        }
    },
    getUserDetail: async req => {
        const { headers, body } = req;
        try {
            let data = await method.getUserDetail(body.username);
            if (data) {
                if (data.avatar) {
                    data.avatar = headers.host + '/file/image/' + data.avatar;
                }
                return {
                    errorCode: 0,
                    msg: 'Lấy dữ liệu thành công',
                    data: data
                };
            } else {
                return {
                    errorCode: 1,
                    msg: 'Không có dữ liệu',
                    data: data
                };
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    addUser: async obj => {
        try {
            const saltRounds = 10;
            obj.password = bcrypt.hashSync(obj.password, saltRounds);
            let data = await method.addUser(obj);
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    },
    login: async req => {
        const { headers, body } = req;
        const { username, password } = body;
        let data = await method.login({
            username: username,
            password: password
        });
        if (data.avatar) {
            data.avatar = headers.host + '/file/image/' + data.avatar;
        }
        return data;
    },
    getUserRoom: async req => {
        let data = await method.getUserRoom(req);
        return data;
    }
};

module.exports = UserController;
