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
    parkingLot.parkACar(req.body.plateNumber, req.body.carColor, function(slot, message){
        if (slot) {
            result = new Result(true, message, slot);
            result.statusCode = 200;
        }else{
            result = new Result(false, message);
            result.statusCode = 404;
        }
        res.status(result.statusCode).json(result.response());
    });
}

let unParkCar = (req, res) => {
    if (!req.body.plateNumber) {
        result = new Result(false, 'unpark car need plateNumber for input');
        result.statusCode = 404;
        return res.status(result.statusCode).json(result.response());
    }

    let result = null;
    parkingLot.unParkCar(req.body.plateNumber, function(slot, message){
        if (slot) {
            result = new Result(true, message, slot);
            result.statusCode = 200;
        }else{
            result = new Result(false, message);
            result.statusCode = 404;
        }
        res.status(result.statusCode).json(result.response());
    });
}

let parkInfo = (req, res) => {
    const plateNumber = req.query.plateNumber;
    console.log(plateNumber);
    if (!plateNumber) {
        result = new Result(false, 'view parking lot info using at least plateNumber');
        result.statusCode = 404;
        return res.status(result.statusCode).json(result.response());
    }
    let slot = parkingLot.findCar(plateNumber);
}

module.exports = {
    parkACar: parkACar,
    unParkCar: unParkCar,
    parkInfo: parkInfo
}