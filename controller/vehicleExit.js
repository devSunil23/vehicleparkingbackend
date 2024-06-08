import ParkingLot from "../models/parkingLotinformation.js";
import VehicleEntryExit from "../models/vehicleEntryAndOut.js";
const vehicleExit = async (req, res) => {
    const { parkingId } = req.body;

    try {
        // Find the parking lot
        const parkingLot = await ParkingLot.findOne();

        if (!parkingLot) {
            return res.status(404).json({ message: "Parking lot not found" });
        }

        const vehicleEntry = await VehicleEntryExit.findById(parkingId);

        if (!vehicleEntry) {
            return res
                .status(404)
                .json({ message: "No entry found for this parking ID" });
        }

        // Check if vehicle is already exited
        if (vehicleEntry.exitTime) {
            return res
                .status(400)
                .json({ message: "Vehicle has already exited" });
        }

        // Update exit time
        vehicleEntry.exitTime = new Date();
        await vehicleEntry.save();

        // Reduce the count of parked vehicles

        parkingLot.numberOfParkedVehicles--;
        await parkingLot.save();

        // Return success response
        return res.status(200).json({
            message: "Vehicle exited successfully",
            exitTime: vehicleEntry.exitTime,
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default vehicleExit;
