const Slot = require('../models/Slot');
const Park = require('../models/Park');

class ParkingLot {
    constructor() {}

    create(count) {
        let slots = [];
        for (let i = 0; i < count; i++) {
            let slot = new Slot(null, null);
            slots.push(slot);
        }
        this.park = new Park(slots);
        console.log('parkingLot: ', this.park);
    }

    leave(num) {
        let slot = this.park.slots[num]; 
        slot.plateNumber = null;
        slot.carColor = null;
    }

    park(plateNumber, carColor) {
        for (let i = 0; i < this.park.slots.length; i++) {
            const slot = this.park.slots[i];
            if (!slot.plateNumber) {
                slot.plateNumber = plateNumber;
                slot.carColor = carColor;
                return slot;
            }
        }
        return null;
    } 
}

module.exports = ParkingLot;