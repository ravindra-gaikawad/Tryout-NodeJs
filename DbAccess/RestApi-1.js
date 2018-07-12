// Reference: https://github.com/petkivim/nodejs-rest-api-example

'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var response = { "response": "This is GET method." };
    res.end(JSON.stringify(response));
});

app.get('/:id', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var response = { "response": "This is GET method with id=" + req.params.id + "." };
    res.end(JSON.stringify(response));
});

app.post('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var response = { "response": "This is POST method." };
    res.end(JSON.stringify(response));
});

app.put('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var response = { "response": "This is PUT method." };
    res.end(JSON.stringify(response));
});

app.delete('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var response = { "response": "This is DELETE method." };
    res.end(JSON.stringify(response));
});

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Node.js API app listening at http://%s:%s", host, port);

});