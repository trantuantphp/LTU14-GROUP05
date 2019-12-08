const express = require('express');
const file_router = express.Router();
var fs = require('fs');
var multer = require('multer');

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
var upload = multer({ storage: storage });

const FileController = require('../controller/File');
file_router.post('/upload', upload.single('avatarImage'), async function(
    req,
    res
) {
    let data = await FileController.upload(req);
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
