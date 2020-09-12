const Slot = require('../models/Slot');
const Park = require('../models/Park');

class ParkingLot {
    constructor() {}

    createPark(count) {
        let slots = [];
        for (let i = 0; i < count; i++) {
            let slot = new Slot(null, null);
            slots.push(slot);
        }
        this.park = new Park(slots);
        // console.log('parkingLot: ', this.park);
    }

    unParkCar(plateNumber, callback) {
        let slot = this.findCar(plateNumber);
        if (slot) {
            slot.plateNumber = null;
            slot.carColor = null;
            return callback(slot, 'getting out of the parking lot was success');
        }else{
            return callback(null, 'plateNumber not found in the parking lot');
        }
    }

    findCar(plateNumber) {
        for (let i = 0; i < this.park.slots.length; i++) {
            const slot = this.park.slots[i];
            if (slot.plateNumber == plateNumber) {
                slot.slotNumber = i + 1;
                return slot;
            }
        }
        return null;
    }

    findCarBySlotNumber(num, callback) {
        let slot = this.park.slots[num - 1];
        if (slot.plateNumber) {
            return callback(slot, 'Success');
        }else{
            return callback(slot, 'Not found');
        }
    }

    parkACar(plateNumber, carColor, callback) {
        let slot = this.findCar(plateNumber);
        if (!slot) {
            for (let i = 0; i < this.park.slots.length; i++) {
                slot = this.park.slots[i];
                if (!slot.plateNumber) {
                    slot.plateNumber = plateNumber;
                    slot.carColor = carColor;
                    slot.slotNumber = i + 1;
                    return callback(slot, 'success');
                }
            }
            return callback(null, 'parking lot is full');
        }else{
            return callback(slot, 'plateNumber is detected parking');
        }
    } 

}

module.exports = ParkingLot;