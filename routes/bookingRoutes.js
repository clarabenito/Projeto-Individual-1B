const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.create);
router.get('/', bookingController.list);
router.get('/:id', bookingController.getById);
router.put('/:id', bookingController.update);
router.delete('/:id', bookingController.delete);
router.get('/sala/:roomId', bookingController.getByRoom);

module.exports = router; 