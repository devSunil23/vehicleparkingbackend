import ParkingLot from "../models/parkingLotinformation.js";
import VehicleEntryExit from "../models/vehicleEntryAndOut.js";

const vehicleEntry = async (req, res) => {
    const { vehicleId } = req.body;
    try {
        // Find the parking lot
        const parkingLot = await ParkingLot.findOne();

        if (!parkingLot) {
            return res.status(404).json({ message: "Parking lot not found" });
        }

        // Check if there's available space
        if (parkingLot.numberOfParkedVehicles < parkingLot.totalParkingSpaces) {
            // Park the vehicle
            parkingLot.numberOfParkedVehicles++;
            await parkingLot.save();

            // Create VehicleEntryExit document
            const entryExit = new VehicleEntryExit({
                vehicleId: vehicleId,
                entryTime: new Date(),
            });
            await entryExit.save();

            // Return success response
            return res.status(200).json({
                message: "Vehicle parked successfully",
                entryTime: entryExit.entryTime,
                parkingId: entryExit._id,
            });
        } else {
            // Return error response if parking space is not available
            return res
                .status(400)
                .json({ message: "Parking space is not available" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default vehicleEntry;
