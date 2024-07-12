import Articles from "../models/ArticlesModel.js";
import Users from "../models/UserModel.js";
import path from "path";
import fs from "fs";

// GET all articles
export const getArticles = async (req, res) => {
  try {
    const articles = await Articles.findAll({
      include: Users,
    });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// GET single article by ID
export const getArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Articles.findOne({
      where: { uuid: id },
      include: Users,
    });
    if (!article) {
      return res.status(404).json({ msg: "Article not found" });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// POST create new article
export const createArticle = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });

  const {
    title,
    author,
    date,
    header1,
    header2,
    header3,
    content,
    content1 = "",
    content2 = "",
    content3 = "",
    content4 = "",
  } = req.body;
  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];
  const userId = req.userId; // Assuming userId is added to req object by authentication middleware

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Articles.create({
        title,
        foto: fileName,
        author,
        date,
        header1,
        header2,
        header3,
        content1,
        content2,
        content3,
        content4,
        content,
        url,
        userId,
      });
      res.status(201).json({ msg: "Article Created Successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: error.message });
    }
  });
};

// PATCH update article by ID
export const updateArticle = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    author,
    header1,
    header2,
    header3,
    content1,
    content2,
    content3,
    content4,
    content,
  } = req.body;

  try {
    const article = await Articles.findOne({
      where: { uuid: id },
    });

    if (!article) {
      return res.status(404).json({ msg: "Article not found" });
    }

    let foto = article.foto;
    let url = article.url;

    if (req.files && req.files.file) {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      const fileName = file.md5 + ext;
      url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
      const allowedTypes = [".png", ".jpg", ".jpeg"];

      if (!allowedTypes.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: "Format gambar tidak valid" });
      }
      if (fileSize > 20000000) {
        // Mengubah batas ukuran file menjadi 20MB
        return res
          .status(422)
          .json({ msg: "Ukuran gambar harus kurang dari 20 MB" });
      }

      // Pindahkan file baru ke direktori yang ditentukan
      file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ msg: err.message });
        }
      });

      // Update nama file gambar
      foto = fileName;
    }

    await Articles.update(
      {
        title,
        author,
        header1,
        header2,
        header3,
        content1,
        content2,
        content3,
        content4,
        content,
        foto,
        url,
      },
      {
        where: { uuid: id },
      }
    );

    res.status(200).json({ msg: "Artikel berhasil diperbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// DELETE article by ID
export const deleteArticle = async (req, res) => {
  const article = await Articles.findOne({
    where: {
      uuid: req.params.id, // Menggunakan uuid dari params untuk mencari artikel
    },
  });

  if (!article) {
    return res.status(404).json({ msg: "Article not found" });
  }

  try {
    const filepath = `./public/images/${article.foto}`;
    fs.unlinkSync(filepath);

    await article.destroy();

    res.status(200).json({ msg: "Article Deleted Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
