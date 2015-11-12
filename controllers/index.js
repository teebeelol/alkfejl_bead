var express = require('express');
var app = express.Router();

app.get('/', function (req, res) {
    res.render('index',{
        currentDate: new Date().toISOString().substring(0, 10),
    });
});

module.exports = app;