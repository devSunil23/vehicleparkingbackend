import express from "express";
import saveVehicleInformationController from "../controller/saveVehicleInformation.js";
const vehicleInformationRouter = express.Router();
// save vehicle information
vehicleInformationRouter.post("/save", saveVehicleInformationController);

export default vehicleInformationRouter;
