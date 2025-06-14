const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.login);
router.post('/', userController.register);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.get('/', userController.list);
router.get('/:id', userController.getById);

module.exports = router; 