const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
// Adicione outras rotas (GET /:id, PUT /:id, etc.)

module.exports = router;
