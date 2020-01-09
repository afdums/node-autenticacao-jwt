const express = require('express');

const router = express.Router();

const loginController = require('../controller/login-controller');

const bodyParser = require('body-parser').json();

router.post('/login', bodyParser, loginController.login);
router.get('/logout', bodyParser, loginController.logout);

module.exports = router;