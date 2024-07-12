import Exercise from "../models/ExerciseModel.js";
import Users from "../models/UserModel.js";
import path from "path";

// GET all exercises
export const getExercises = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Exercise.findAll({
        attributes: ["uuid", "note", "foto", "date", "url", "userId"],
        include: [
          {
            model: Users,
            attributes: ["uuid", "name", "email"],
          },
        ],
      });
    } else {
      response = await Exercise.findAll({
        attributes: ["uuid", "note", "foto", "date", "url", "userId"],
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: Users,
            attributes: ["uuid", "name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET single exercise by ID
export const getExerciseById = async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await Exercise.findOne({
      where: { uuid: id },
      include: Users,
    });
    if (!exercise) {
      return res.status(404).json({ msg: "Exercise not found" });
    }
    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// POST create new exercise
export const createExercise = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });

  const note = req.body.note;
  const userId = req.userId;

  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 50000000)
    return res.status(422).json({ msg: "Image must be less than 50 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      const newExercise = await Exercise.create({
        note: note,
        foto: fileName,
        userId,
        url,
      });
      res
        .status(201)
        .json({ msg: "Exercise Created Successfully", newExercise });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: error.message });
    }
  });
};

// PATCH update exercise by ID
export const updateExercise = async (req, res) => {
  const { id } = req.params;
  const { note } = req.body;

  try {
    // Cari exercise berdasarkan uuid
    const exercise = await Exercise.findOne({
      where: { uuid: id },
    });

    // Jika exercise tidak ditemukan, kirim respons 404
    if (!exercise) {
      return res.status(404).json({ msg: "Exercise not found" });
    }

    // Update data exercise
    await exercise.update({ note });

    res.status(200).json({ msg: "Exercise updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// DELETE exercise by ID
export const deleteExercise = async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await Exercise.findOne({
      where: { uuid: id },
    });

    if (!exercise) {
      return res.status(404).json({ msg: "Exercise not found" });
    }

    await Exercise.destroy({
      where: { uuid: id },
    });

    res.status(200).json({ msg: "Exercise deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
