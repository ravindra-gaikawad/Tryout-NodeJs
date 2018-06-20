'use strict';
var http = require('http');
var port = process.env.port || 8081;

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var products = require('./routes/products');

// Keep these lines at the top before using any routes.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', products);

var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});

app.get("/", function (req, res) {
    res.send("Hello World");
});