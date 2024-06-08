import express from "express";
import saveParkingLot from "../controller/saveParkingLot.js";

const parkingLotRouter = express.Router();
// save parking lot information
parkingLotRouter.post("/save", saveParkingLot);

export default parkingLotRouter;
