'use strict';
var http = require('http');
var port = 8081;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var data = require('./data.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get('/products', data.getProducts);
app.post('/products', data.addProduct);
app.delete('/products/:id', data.deleteProduct);
app.put('/products/:id', data.updateProduct);