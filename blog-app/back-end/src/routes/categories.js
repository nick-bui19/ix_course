const express = require("express");
const { default: categoryService } = require("../../../front-end/src/services/categoriesService");
const router = express.Router();

router.post("/", (req, res) => {
  categoryController.createCategory(req, res);
});

router.get("/", (req, res) => {
  categoryController.getCategories(req, res);
});

router.put("/", (req, res) => {
  categoryController.updateCategory(req, res);
});

router.delete("/", (req, res) => {
  categoryController.deleteCategory(req, res);
});

module.exports = router;