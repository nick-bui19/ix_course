const express = require("express");
const router = express.Router();
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlogByID,
  deleteBlogByID,
} = require("../controllers/blogs");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, (req, res) => {
  createBlog(req, res);
});

router.get("/", (req, res) => {
  getBlogs(req, res);
});

router.get("/:id", (req, res) => {
  getBlogById(req, res);
});

//getBlogsByCategoryID to add

router.put("/:id", protect, (req, res) => {
  updateBlogByID(req, res);
});

router.delete("/:id", protect, (req, res) => {
  deleteBlogByID(req, res);
});

module.exports = router;