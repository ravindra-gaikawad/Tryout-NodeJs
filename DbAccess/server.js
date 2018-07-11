var express = require('express');
var app = express();
var sql = require("mssql");
// config for your database
var config = {
    user: 'sa',
    password: 'pass@123',
    server: 'localhost',
    database: 'SchoolDB',
    port: 1433,
    options: {
        encrypt: false
    }
};

//const connStr = "Server=RAVINDRAG-PC;Database=SchoolDB;Trusted_Connection=True;";

app.get('/', function (req, res) {

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the data
        request.query('select * from Student', function (err, recordset) {

            if (err) console.log(err);

            // send data as a response
            res.send(recordset);

        });
    });
});

var server = app.listen(8080, function () {
    console.log('Server is running.. on Port 8080');
});