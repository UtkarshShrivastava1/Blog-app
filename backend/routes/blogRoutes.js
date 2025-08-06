const express = require("express");
const {
  getAllBlogs,
  getBlogById,
  createBlog,
} = require("../controller/blogController");

const router = express.Router();
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", createBlog);

module.exports = router;
