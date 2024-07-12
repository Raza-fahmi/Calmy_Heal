import express from "express";
import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/Article.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/articles", getArticles);
router.get("/articles/:id", getArticleById);
router.post("/articles", verifyUser, createArticle);
router.patch("/articles/:id", verifyUser, updateArticle);
router.delete("/articles/:id", verifyUser, deleteArticle);

export default router;
