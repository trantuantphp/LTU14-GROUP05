const Sequelize = require('sequelize');
const db = require('../../common/db');
const table = 'tb_room_member';
const User = require('../User/UserModel');
const Room = require('../Room/RoomModel');

var RoomMember = db.define(
    'RoomMember',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        room_id: {
            type: Sequelize.INTEGER
        },
        member_id: {
            type: Sequelize.INTEGER
        },
        role: {
            type: Sequelize.TINYINT,
            allowNull: true
        },
        status: {
            type: Sequelize.TINYINT,
            defaultValue: 1
        }
    },
    {
        timestamps: false,
        tableName: table
    }
);
RoomMember.associate = () => {
    RoomMember.beLongsTo(Room.model, {
        foreignKey: 'room_id',
        targetKey: 'id'
    });
    RoomMember.belongsTo(User.model, {
        foreignKey: 'member_id',
        targetKey: 'id'
    });
};
module.exports = RoomMember;
