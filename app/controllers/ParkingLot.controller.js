const ParkingLot = require('../services/ParkingLot.service');
const Result = require('../models/Result');

let parkingLot = new ParkingLot();
parkingLot.createPark(10);

let parkACar = (req, res) => {
    let result = null;
    if (!req.body.plateNumber) {
        result = new Result(false, 'park a car need plateNumber to input');
        result.statusCode = 404;
        return res.status(result.statusCode).json(result.response());
    }
    let slot = parkingLot.parkACar(req.body.plateNumber, req.body.carColor);
    if (slot) {
        result = new Result(true, 'success', slot);
        result.statusCode = 200;
    }else{
        result = new Result(false, 'parking lot is full');
        result.statusCode = 404;
    }
    res.status(result.statusCode).json(result.response());
}

let leavePark = (req, res) => {
    
}

let parkInfo = (req, res) => {

}

module.exports = {
    parkACar: parkACar,
    leavePark: leavePark
}