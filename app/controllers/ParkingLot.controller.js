const ParkingLot = require('../services/ParkingLot.service');
const Result = require('../models/Result');

let parkingLotObj = new ParkingLot();
parkingLotObj.create(10);

let parkACar = (req, res) => {
    console.log('req: ', req.body);
    let slot = parkingLotObj.park(req.body.plateNumber, req.body.carColor);
    if (slot) {
        res.status(200).json(new Result(true, 'message', slot));
    }else{
        res.status(200).json(new Result(false, 'parking lot full'));
    }
}

let leavePark = (req, res) => {

}

module.exports = {
    // parkingLotObj: parkingLotObj,
    parkACar: parkACar,
    leavePark: leavePark
}