import express from "express";
import {
  getReadings,
  getReadingById,
  createReading,
  updateReading,
  deleteReading,
} from "../controllers/Reading.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/reading", verifyUser, getReadings);
router.get("/reading/:id", verifyUser, getReadingById);
router.post("/reading", verifyUser, createReading);
router.patch("/reading/:id", verifyUser, updateReading);
router.delete("/reading/:id", verifyUser, deleteReading);

export default router;
