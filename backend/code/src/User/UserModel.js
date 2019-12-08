const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../../common/db');
const table = 'tb_user';
const param = require('../../common/param');
const RoomMember = require('../Room_Member/RoomMemberModel');
const models = require('../models');

// var User = db.define(
//     'User',
//     {
//         id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true
//         },
//         username: {
//             type: Sequelize.STRING
//         },
//         password: Sequelize.STRING,
//         name: Sequelize.STRING,
//         status: {
//             type: Sequelize.TINYINT,
//             defaultValue: 1
//         },
//         avatar: {
//             type: Sequelize.STRING,
//             allowNull: true
//         }
//     },
//     {
//         timestamps: false,
//         tableName: table
//     }
// );
// User.hasMany(RoomMember, {
//     as: 'rooms',
//     foreignKey: 'member_id',
//     targetKey: 'id'
// });
const { msg, errorCode } = param;

var method = {
    // getAllUser: async () => {
    //     let data = await User.findAll({
    //         where: {
    //             status: 1
    //         },
    //         attributes: ['username', 'name', 'avatar', 'status']
    //     });
    //     return data;
    // },
    // getUserDetail: username => {
    //     let data = User.findOne({
    //         where: {
    //             username: username,
    //             status: 1
    //         },
    //         attributes: ['username', 'name', 'avatar']
    //     });
    //     return data;
    // },
    // addUser: async obj => {
    //     const { username, password, name, avatar } = obj;
    //     let data = await User.findOne({
    //         where: {
    //             username: username,
    //             status: 1
    //         }
    //     });
    //     if (!data) {
    //         User.create({
    //             username: username,
    //             password: password,
    //             name: name,
    //             avatar: avatar
    //         });
    //         return {
    //             errorCode: errorCode.callAPI.success,
    //             msg: msg.model.addRecord.success
    //         };
    //     } else {
    //         return {
    //             errorCode: errorCode.callAPI.success,
    //             msg: msg.model.login.inexist
    //         };
    //     }
    // },
    // login: async obj => {
    //     const { username, password } = obj;
    //     let data = await User.findOne({
    //         where: {
    //             username: username,
    //             status: 1
    //         },
    //         attributes: ['username', 'name', 'avatar']
    //     });
    //     if (!data) {
    //         return {
    //             errorCode: errorCode.callAPI.success,
    //             msg: msg.model.login.inexist
    //         };
    //     } else {
    //         let hash_password = await User.findOne({
    //             where: {
    //                 username: username
    //             },
    //             attributes: ['password']
    //         });
    //         let check_password = bcrypt.compareSync(
    //             password,
    //             hash_password.password
    //         );
    //         if (check_password) {
    //             return {
    //                 errorCode: errorCode.callAPI.success,
    //                 msg: msg.model.login.success,
    //                 data: data
    //             };
    //         } else {
    //             return {
    //                 errorCode: errorCode.callAPI.success,
    //                 msg: msg.model.login.failed
    //             };
    //         }
    //     }
    // },
    getUserRoom: async req => {
        const { username } = req;
        let data = models.User.findOne({
            where: {
                username: username
            },
            attributes: ['id', 'username'],
            include: [
                {
                    as: 'rooms',
                    model: models.Room,
                    through: {
                        attributes: ['status']
                    }
                }
            ]
        });
        return data;
    }
};

module.exports = {
    // model: User,
    method: method
};
