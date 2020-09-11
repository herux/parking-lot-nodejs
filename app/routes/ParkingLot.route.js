const express = require('express');
const router = express.Router();
const ParkingLotCtrl = require('../controllers/ParkingLot.controller');

router.post('/park_a_car', ParkingLotCtrl.parkACar);
router.post('/leave_park', ParkingLotCtrl.leavePark);

module.exports = router;