import { Router } from "express";
import {
  cleanTrips,
  createTrip,
  getTrips,
} from "../controllers/trip-controller.js";

const router = Router();

router.post("/trips", createTrip);
router.get("/trips", getTrips);
router.delete("/trips", cleanTrips);

export default router;
