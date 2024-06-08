import VehicleInformation from "../models/vehicleInformation.js";

const saveVehicleInformationController = async (req, res) => {
    try {
        const { ownerName, registrationNumber } = req.body;

        if (!ownerName || !registrationNumber) {
            return res.status(400).json({
                message: "Owner name and registration number are required",
            });
        }

        const newVehicle = new VehicleInformation({
            ownerName,
            registrationNumber,
        });

        await newVehicle.save();

        res.status(201).json({
            message: "Vehicle information saved successfully",
            vehicle: newVehicle,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error, could not save vehicle information",
        });
    }
};

export default saveVehicleInformationController;
