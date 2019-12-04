const Sequelize = require('sequelize');
const db = require('../../common/db');
const table = 'tb_file';

var File = db.define(
    'File',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
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
        tableName: table
    }
);

var method = {
    uploadFile: async obj => {
        const { type, name, original_name, folder, field_name } = obj;
        let data = await File.create({
            type: type,
            name: name,
            original_name: original_name,
            folder: folder,
            field_name: field_name
        });
        return {
            errorCode: 0,
            msg: 'Thêm bản ghi thành công',
            data: data
        }
    }
}

module.exports = method;