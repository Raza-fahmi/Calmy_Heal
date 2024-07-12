import Reading from "../models/ReadingModel.js";
import Users from "../models/UserModel.js";

// GET all readings
export const getReadings = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Reading.findAll({
        attributes: ["uuid", "note", "date", "userId"], // Sesuaikan dengan atribut di model Reading
        include: [
          {
            model: Users,
            attributes: ["uuid", "name", "email"],
          },
        ],
      });
    } else {
      response = await Reading.findAll({
        attributes: ["uuid", "note", "date", "userId"], // Sesuaikan dengan atribut di model Reading
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

// GET single reading by ID
export const getReadingById = async (req, res) => {
  const { id } = req.params;
  try {
    const reading = await Reading.findOne({
      where: { uuid: id },
      include: Users,
    });
    if (!reading) {
      return res.status(404).json({ msg: "Reading not found" });
    }
    res.status(200).json(reading);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// POST create new reading
export const createReading = async (req, res) => {
  const { note } = req.body;
  const userId = req.userId; // Assuming you have authenticated user

  try {
    const newReading = await Reading.create({
      note,
      userId,
    });

    res.status(201).json(newReading);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// PATCH update reading by ID
export const updateReading = async (req, res) => {
  const { id } = req.params;
  const { note } = req.body;

  try {
    const reading = await Reading.findOne({
      where: { uuid: id },
    });

    if (!reading) {
      return res.status(404).json({ msg: "Reading not found" });
    }

    await Reading.update(
      {
        note,
      },
      {
        where: { uuid: id },
      }
    );

    res.status(200).json({ msg: "Reading updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// DELETE reading by ID
export const deleteReading = async (req, res) => {
  const { id } = req.params;
  try {
    const reading = await Reading.findOne({
      where: { uuid: id },
    });

    if (!reading) {
      return res.status(404).json({ msg: "Reading not found" });
    }

    await Reading.destroy({
      where: { uuid: id },
    });

    res.status(200).json({ msg: "Reading deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
