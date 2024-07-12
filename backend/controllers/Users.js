import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["uuid", "name", "email", "role"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: ["uuid", "name", "email", "role", "foto"],
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok" });
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      name,
      email,
      password: hashPassword,
      role,
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

    const { name, email, password, confPassword, role, foto } = req.body;

    let hashPassword = user.password;
    if (password && password !== "") {
      if (password !== confPassword) {
        return res
          .status(400)
          .json({ msg: "Password dan Confirm Password tidak cocok" });
      }
      hashPassword = await argon2.hash(password);
    }

    await User.update(
      {
        name,
        email,
        password: hashPassword,
        role,
        foto: foto || user.foto, // Menggunakan foto baru jika disertakan, atau tetap menggunakan foto lama
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

    await User.destroy({
      where: {
        id: user.id,
      },
    });

    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
