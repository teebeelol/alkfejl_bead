var express = require('express');
var app = express.Router();
var passport = require('passport');


app.get('/', function (req, res) {
    res.render('login/index');
});

app.post('/', passport.authenticate('local', {
    successRedirect: '/customers/list',
    failureRedirect: '/login',
    failureFlash: true,
    badRequestMessage: 'Hiányzó adatok'
}));

app.get('/signup', function (req, res) {
    res.render('login/signup', {
        errorMessages: req.flash('error')
    });
});

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect:    '/login',
    failureRedirect:    '/login/signup',
    failureFlash:       true,
    badRequestMessage:  'Hiányzó adatok'
}));

module.exports = app;