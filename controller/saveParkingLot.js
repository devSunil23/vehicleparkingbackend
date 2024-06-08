import ParkingLot from "../models/parkingLotinformation.js";

const saveParkingLot = async (req, res) => {
    try {
        // Extracting data from the request body
        const { totalParkingSpaces, numberOfParkedVehicles } = req.body;

        // Creating a new ParkingLot instance
        const parkingLot = new ParkingLot({
            totalParkingSpaces,
            numberOfParkedVehicles,
        });

        // Saving the parking lot details to the database
        const savedParkingLot = await parkingLot.save();

        // Sending success message
        res.status(201).json({
            message: "Parking lot saved successfully",
            data: savedParkingLot,
        });
    } catch (error) {
        // Handling errors
        console.error("Error saving parking lot details:", error);
        res.status(500).json({ error: "Could not save parking lot details" });
    }
};
export default saveParkingLot;
