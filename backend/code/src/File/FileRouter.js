const express = require('express');
var fs = require('fs');
var multer = require('multer');
var FileController = require('./FileController');
const file_router = express.Router();

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        let d = new Date();
        cb(
            null,
            d.getTime() +
                '_' +
                Math.round(Math.random() * 10000) +
                '_' +
                file.originalname
        );
    }
});
var upload = multer({storage: storage});
file_router.post('/upload', upload.single('avatarImage'), async function(req, res, next) {
    const { fieldname, filename, originalname, mimetype } = req.file;
    let obj = {
        folder: 'uploads',
        type: mimetype,
        fieldname: fieldname,
        filename: filename,
        originalname: originalname
    };
    let data = await FileController.uploadFile(obj);
    return res.json(data);
});
file_router.get('/image/:name?', function(req, res) {
    let img = 'uploads/' + req.params.name;
    fs.readFile(img, function(err, data) {
        if (err) {
            return err;
        }
        res.write(data);
        res.end();
    });
});

module.exports = file_router;
