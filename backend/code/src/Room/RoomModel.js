const Sequelize = require('sequelize');
const db = require('../../common/db');
const table = 'tb_room';
const RoomMember = require('../Room_Member/RoomMemberModel');

var Room = db.define(
    'Room',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        type: {
            type: Sequelize.TINYINT
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
Room.associate = () => {
    Room.hasMany(RoomMember, {
        as: 'members',
        foreignKey: 'room_id',
        targetKey: 'id'
    });
};

var method = {
    getListMember: async req => {
        const { id } = req;
        let data = await Room.findAll({
            // where: {
            //     id: id
            // },
            include: [
                {
                    as: 'members',
                    model: RoomMember,
                    attributes: ['member_id', 'status']
                }
            ]
        });
        return data;
    }
};

module.exports = {
    model: Room,
    method: method
};
