const models = require('../models');
const { File } = models;

module.exports = {
    upload: async req => {
        const { fieldname, filename, originalname, mimetype } = req.file;
        let data = await File.create({
            type: mimetype,
            name: filename,
            original_name: originalname,
            folder: 'uploads',
            field_name: fieldname
        });
        return {
            errorCode: 0,
            msg: 'Thêm bản ghi thành công',
            data: data
        };
    }
};
