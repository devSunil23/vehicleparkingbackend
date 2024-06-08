import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import vehicleInformationRouter from "./routes/vehicleInformation.js";
import vehicleEntryExitRouter from "./routes/VehicleEntryAndOut.js";
import parkingLotRouter from "./routes/parkingLotInformation.js";

dotenv.config();

const port = process.env.PORT || 3005;
const app = express();

app.use(cors());
app.use(express.json());

// Connect to database
const connectionUrl = process.env.MONGO_URI;

mongoose.connect(connectionUrl);

const db = mongoose.connection;

db.on("error", (error) => {
    console.error("Database connection error:", error);
});

db.once("open", () => {
    console.log("Connected to database successfully!");
});

// Import routes

//vehicle information routes
app.use("/vehicleinformation", vehicleInformationRouter);

//vehicle entry/exit information routes
app.use("/vehicle", vehicleEntryExitRouter);

//parking lot information
app.use("/parkinglot", parkingLotRouter);

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
