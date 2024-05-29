  const Blog = require ("../models/blogModel");

  const createBlogs = async (req, res) => {
      console.log(req.body);

      const blog = new Blog({
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
          content: req.body.content,
          authorID: req.body.authorID,
          categoryID: req.body.categoryID,
      })

      await blog.save();
      
      //what does .json here do? upon success, does it pass back blogs?
      res.status(200).json({
        message: "Blog created!",
        data: blog,
      });
    };
    
    const getBlogs = (req, res) => {
      res.status(200).json({
        message: "Get all blogs!",
        data: [],
      });
    };
    
    const getBlogById = (req, res) => {
      console.log(req.params.id);
      res.status(200).json({
        message: "Get blog by ID!",
        data: [],
      });
    };
    
    const getBlogsByCategoryID = (req, res) => {
      console.log(req.params.id);
      res.status(200).json({
        message: "Get blogs by categoryID!",
        data: [],
      });
    };
    
    const updateBlogByID = (req, res) => {
      console.log(req.body);
      console.log(req.params.id);
      res.status(200).json({
        message: "Blog updated!",
        data: [],
      });
    };
    
    const deleteBlogByID = (req, res) => {
      console.log(req.params.id);
      res.status(200).json({
        message: "Blog deleted!",
        data: [],
      });
    };
    
    module.exports = {
      createBlogs,
      getBlogs,
      getBlogById,
      getBlogsByCategoryID,
      updateBlogByID,
      deleteBlogByID,
    };