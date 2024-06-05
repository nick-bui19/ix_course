const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategoryByID,
  deleteCategoryByID,
} = require("../controllers/categories.js");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, (req, res) => {
  createCategory(req, res);
});

router.get("/", (req, res) => {
  getCategories(req, res);
});

router.get("/:id", (req, res) => {
  getCategoryById(req, res);
});

router.put("/:id", protect, (req, res) => {
  updateCategoryByID(req, res);
});

router.delete("/:id", protect, (req, res) => {
  deleteCategoryByID(req, res);
});

module.exports = router;