const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const param = require('../common/param');
const db = require('../common/db');

var User = db.define(
    'User',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: Sequelize.STRING,
        name: Sequelize.STRING,
        status: {
            type: Sequelize.TINYINT,
            defaultValue: 1
        },
        avatar: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName: 'tb_user'
    }
);

var File = db.define(
    'File',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        original_name: {
            type: Sequelize.STRING
        },
        folder: {
            type: Sequelize.STRING
        },
        field_name: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
        tableName: 'tb_file'
    }
);

var Room = db.define(
    'Room',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        tableName: 'tb_room'
    }
);

var RoomMember = db.define(
    'RoomMember',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        tableName: 'tb_room_member'
    }
);

var Message = db.define(
    'Message',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: Sequelize.TINYINT
        },
        value: {
            type: Sequelize.TEXT
        },
        sender_id: {
            type: Sequelize.INTEGER
        },
        receiver_id: {
            type: Sequelize.INTEGER
        },
        receiver_type: {
            type: Sequelize.TINYINT
        },
        file_name: {
            type: Sequelize.STRING
        },
        file_original_name: {
            type: Sequelize.STRING
        }
    },
    {
        updatedAt: false,
        tableName: 'tb_message'
    }
);

var Admin = db.define(
    'Admin',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
        tableName: 'tb_admin'
    }
);

User.belongsToMany(Room, {
    as: 'rooms',
    through: RoomMember,
    foreignKey: 'member_id',
    otherKey: 'room_id'
});
Room.belongsToMany(User, {
    as: 'members',
    through: RoomMember,
    foreignKey: 'room_id',
    otherKey: 'member_id'
});
RoomMember.belongsTo(User, {
    foreignKey: 'member_id',
    targetKey: 'id'
});
RoomMember.belongsTo(Room, {
    foreignKey: 'room_id',
    targetKey: 'id'
});
module.exports = {
    User,
    File,
    Room,
    RoomMember,
    Message,
    Admin
};
