const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.post('/', roomController.create);
router.get('/', roomController.list);
router.get('/:id', roomController.getById);
router.put('/:id', roomController.update);
router.delete('/:id', roomController.delete);

module.exports = router; 