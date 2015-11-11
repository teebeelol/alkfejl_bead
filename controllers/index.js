var express = require('express');
var app = express.Router();

var currentDate = (new Date()).toISOString().substring(0, 10);

app.get('/', function (req, res) {
    res.render('index',{
        currentDate: currentDate,
    });
});

module.exports = app;