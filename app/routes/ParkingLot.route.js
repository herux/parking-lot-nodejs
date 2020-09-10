const express = require('express');
const router = express.Router();
const parkACar = require('../controllers/ParkingLot.controller').parkACar;
const leavePark = require('../controllers/ParkingLot.controller').leavePark;

router.post('/park_a_car', parkACar);
router.post('/leave_park', leavePark);

module.exports = router;