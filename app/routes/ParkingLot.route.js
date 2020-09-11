const express = require('express');
const router = express.Router();
const ParkingLotCtrl = require('../controllers/ParkingLot.controller');

router.post('/park_a_car', ParkingLotCtrl.parkACar);
router.post('/unpark_car', ParkingLotCtrl.unParkCar);
router.post('/park_info', ParkingLotCtrl.parkInfo);

module.exports = router;