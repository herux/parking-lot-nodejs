const express = require('express');
const router = express.Router();
const ParkingLotController = require('../controllers/ParkingLot.controller');

router.post('/park_a_car', ParkingLotController.parkACar());
router.post('/leave_park', ParkingLotController.leavePark());

module.exports = router;