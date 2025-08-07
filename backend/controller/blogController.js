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
  try {
    const { title, content, image } = req.body;
    const newBlog = await Blog.create({ title, content, image });
    console.log(`New blog posted: ${newBlog.title} (ID: ${newBlog._id})`);
    res.status(201).json(newBlog);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Failed to create blog", error: error.message });
  }
};

//delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ msg: "Blog not found" });
    console.log(`Blog deleted: ${blog.title} (ID: ${blog._id})`);
    res.json({ msg: "Blog deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Failed to delete blog", error: error.message });
  }
};
