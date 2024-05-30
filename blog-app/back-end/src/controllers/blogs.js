  const Blog = require ("../models/blogModel");

  const createBlogs = async (req, res) => {
    try {
      console.log(req.body);

      const blog = new Blog({
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
          content: req.body.content,
          authorId: req.body.authorId,
          categoryIds: req.body.categoryIds,
      })
      
      //what does .json here do? upon success, does it pass back blogs?

      const newBlog = await blog.save();
      res.status(201).json({ message: "New blog created!", data: newBlog });
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
    
  const getBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json({ message: "Return all blogs!", data: blogs });
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
  
  const getBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (blog) {
        res.status(200).json({ message: "Return blog by ID!", data: blog });
      } else {
        res.status(404).json({ message: "Blog not found!", data: [] });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
  
  //const getBlogsByCategory todo

  const updateBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (blog) {
        blog.authorId = req.body.authorId || blog.authorId;
        blog.categoryIds = req.body.categoryIds || blog.categoryIds;
        blog.title = req.body.title || blog.title;
        blog.description = req.body.description || blog.description;
        blog.image = req.body.image || blog.image;
        blog.content = req.body.content || blog.content;
        const updatedBlog = await blog.save();
        res.status(200).json({ message: "Blog updated!", data: updatedBlog });
      } else {
        res.status(404).json({ message: "Blog not found!", data: [] });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };
  
  const deleteBlog = async (req, res) => {
    try {
      const blog = await Blog.findByIdAndDelete(req.params.id);
      if (blog) {
        return res.status(200).json({ message: "Blog deleted!" });
      } else {
        return res.status(404).json({ message: "Blog not found!" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    createBlogs,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog,
  };