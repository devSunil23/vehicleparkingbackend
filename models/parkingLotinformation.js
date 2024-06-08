import mongoose, { Schema } from "mongoose";

// Define the ParkingLot schema
const ParkingLotSchema = new Schema({
    totalParkingSpaces: {
        type: Number,
        required: true,
        default: 10,
    },
    numberOfParkedVehicles: {
        type: Number,
        default: 0,
    },
});

// Create the model
const ParkingLot = mongoose.model("ParkingLot", ParkingLotSchema);

export default ParkingLot;
