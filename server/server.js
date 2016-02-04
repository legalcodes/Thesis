var express = require('express');
var app = express();
var db = require('./sequelizeDB.js');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));

// console.log(__dirname + '/../index.html');
app.listen(port);
console.log('karun says server works');
