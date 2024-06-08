import mongoose, { Schema } from "mongoose";

// Define the schema
const vehicleSchema = new Schema(
    {
        ownerName: {
            type: String,
            required: true,
        },
        registrationNumber: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

// Create the model
const VehicleInformation = mongoose.model("VehicleInformation", vehicleSchema);

export default VehicleInformation;
