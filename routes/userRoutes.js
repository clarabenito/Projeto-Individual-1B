const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.register);
router.get('/', userController.list);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router; 