const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.use(bodyParser.json());

const loginRouter = require('./router/login-router');
app.use('/', loginRouter);

const calculadoraRouter = require('./router/calculadora-router');
app.use('/home/', calculadoraRouter);



module.exports = app;