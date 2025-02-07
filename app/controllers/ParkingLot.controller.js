const ParkingLot = require('../services/ParkingLot.service');
const Result = require('../models/Result');

const PARK_COUNT = process.env.PARK_COUNT || 10;

let parkingLot = new ParkingLot();
parkingLot.createPark(PARK_COUNT);

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
    const slotNumber = req.query.slotNumber;
    let result;
    if (!plateNumber) {
        result = new Result(false, 'view parking lot info using at least plateNumber');
        result.statusCode = 404;
        return res.status(result.statusCode).json(result.response());
    }
    let slot = parkingLot.findCar(plateNumber);
    if (slot) {
        result = new Result(true, 'success', slot);
        result.statusCode = 200;
        return res.status(result.statusCode).json(result.response());
    }else{
        result = new Result(false, 'plateNumber not found');
        result.statusCode = 404;
        return res.status(result.statusCode).json(result.response());
    }
}

module.exports = {
    parkACar: parkACar,
    unParkCar: unParkCar,
    parkInfo: parkInfo
}