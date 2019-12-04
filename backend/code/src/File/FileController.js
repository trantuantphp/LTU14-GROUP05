var File = require('./FileModel');

var FileController = {
    uploadFile: async obj => {
        const { folder, type, fieldname, filename, originalname } = obj;
        let param = {
            type: type,
            name: filename,
            original_name: originalname,
            folder: folder,
            field_name: fieldname
        };
        let data = await File.uploadFile(param);
        return {
            erorrCode: 0,
            msg: 'Tải lên file thành công',
            data: data.data
        }
    }
};

module.exports = FileController;
