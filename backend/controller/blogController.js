const Blog = require("../model/Blog");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ msg: "Blog not found" });
  res.json(blog);
};

exports.createBlog = async (req, res) => {
  const { title, content, image } = req.body;
  const newBlog = await Blog.create({ title, content, image });
  res.status(201).json(newBlog);
};
