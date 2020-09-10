const ParkingLot = require('./app/controllers/ParkingLot.controller');

let parkingLotObj = new ParkingLot();
parkingLotObj.create(count);

let parkACar = (req, res) => {

}

let leavePark = (req, res) => {

}

module.exports = {
    parkACar: parkACar,
    leavePark: leavePark
}