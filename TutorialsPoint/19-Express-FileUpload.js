var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

//app.use(bodyParser);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/Temp' }).single('singleInputFileName'));

app.get('/FileUpload.html', function (req, res) {
    res.sendFile(__dirname + "/" + "FileUpload.html");
});

app.post('/fileupload', function (req, res) {
    console.log(req.file.originalname);
    console.log(req.file.path);
    console.log(req.file.type);
    var file = __dirname + "/" + req.file.originalname;

    fs.readFile(req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.file.originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});