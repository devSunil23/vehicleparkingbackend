import mongoose, { Schema } from "mongoose";

// Define the VehicleEntryExit schema
const VehicleEntryExitSchema = new Schema(
    {
        vehicleId: {
            type: Schema.Types.ObjectId,
            ref: "VehicleInformation",
            required: true,
        },
        entryTime: {
            type: Date,
            default: Date.now,
        },
        exitTime: {
            type: Date,
        },
    },
    { timestamps: true }
);

// Create the model
const VehicleEntryExit = mongoose.model(
    "VehicleEntryExit",
    VehicleEntryExitSchema
);

export default VehicleEntryExit;
