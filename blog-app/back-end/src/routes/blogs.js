const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");

/**
 * POST /api/blogs
 */
router.post("/", blogController.createBlog);

/**
 * GET /api/blogs
 */
router.get("/", blogController.getBlogs);

/**
 * Get blogs by blog ID
 * GET /api/blogs/:id
 */
router.get("/:id", blogController.getBlogById);

/**
 * Get blogs by category ID
 * GET /api/blogs/categories/:id
 */
router.get("/categories/:id", blogController.getBlogsByCategoryId);

/**
 * PUT /api/blogs/:id
 */
router.put("/:id", blogController.updateBlogById);

/**
 * DELETE /api/blogs/:id
 */
router.delete("/:id", blogController.deleteBlogById);


module.exports = router;