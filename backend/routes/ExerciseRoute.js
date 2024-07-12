import express from "express";
import {
  getExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise,
} from "../controllers/Exercise.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/exercise", verifyUser, getExercises);
router.get("/exercise/:id", verifyUser, getExerciseById);
router.post("/exercise", verifyUser, createExercise);
router.patch("/exercise/:id", verifyUser, updateExercise);
router.delete("/exercise/:id", verifyUser, deleteExercise);

export default router;
