import { Router } from "express";
import vehicleEntry from "../controller/vehicleEntry.js";
import vehicleExit from "../controller/vehicleExit.js";
import getVehicleEntries from "../controller/getEntryAndOutInformation.js";
const vehicleEntryExitRouter = Router();
//vehicle entry routes
vehicleEntryExitRouter.post("/entry", vehicleEntry);
vehicleEntryExitRouter.put("/exit", vehicleExit);
vehicleEntryExitRouter.get("/entryexitget/:page/:limit", getVehicleEntries);
export default vehicleEntryExitRouter;
