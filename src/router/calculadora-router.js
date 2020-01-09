const express = require('express');

const router = express.Router();

const calculadoraController = require('../controller/calculadora-controller');

const authController = require('../controller/auth-controller');

router.get('/', authController.validate, calculadoraController.welcome);
router.get('/pi', authController.validate, calculadoraController.returnPi);
router.post('/soma', authController.validate, calculadoraController.soma);

module.exports = router;