import VehicleEntryExit from "../models/vehicleEntryAndOut.js";

const getVehicleEntries = async (req, res) => {
    try {
        const { page, limit } = req.params;

        // Convert page and limit to integers
        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);
        console.log(pageNum, limitNum);
        // Check if page and limit are valid numbers
        if (isNaN(pageNum) || isNaN(limitNum) || pageNum < 1 || limitNum < 1) {
            return res
                .status(400)
                .json({ message: "Invalid page or limit parameters." });
        }

        const vehicleEntries = await VehicleEntryExit.aggregate([
            {
                $lookup: {
                    from: "vehicleinformations",
                    localField: "vehicleId",
                    foreignField: "_id",
                    as: "vehicle",
                },
            },
            {
                $unwind: "$vehicle",
            },
            {
                $project: {
                    _id: 0,
                    ownerName: "$vehicle.ownerName",
                    registrationNumber: "$vehicle.registrationNumber",
                    entryTime: 1,
                    exitTime: 1,
                    vehicleId: 1,
                },
            },
            {
                $skip: (pageNum - 1) * limitNum,
            },
            {
                $limit: limitNum,
            },
        ]);

        // Send the result as JSON response
        res.status(200).json(vehicleEntries);
    } catch (error) {
        // Log the error
        console.error("Error:", error);

        res.status(500).json({ message: "Internal server error." });
    }
};

export default getVehicleEntries;
