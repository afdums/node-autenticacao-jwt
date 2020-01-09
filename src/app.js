const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const loginRouter = require('./router/login-router');
app.use('/', loginRouter);

const calculadoraRouter = require('./router/calculadora-router');
app.use('/home/', calculadoraRouter);



module.exports = app;