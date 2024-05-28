import React, { useEffect, useState } from "react";

import Heading from "../../Components/Heading";
import Navbar from "../../Components/Navbar";
import BlogGrid from "../../Components/BlogGrid";
import SubHeading from "../../Components/SubHeading";
import CategoryList from "../../Components/CategoryList";
import Footer from "../../Components/Footer";

import blogService from "../../services/blogService";
import categoriesService from "../../services/categoriesService";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
// const data = require("../../dummy-data.json");
// const blogs = data.blogPosts.reverse();
// const categories = data.categories;

export default function HomePage() {
  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRes = await blogService.getBlogs();
        setBlogs(blogsRes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesRes = await categoriesService.getCategories();
        console.log("Fetched Categories: ", categoriesRes);
        setCategories(categoriesRes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
    </>
  );
}


//    //using promises
// blogService.getBlogs().then((blogs) => {
//   setBlogs(blogs);
// })
// .catch((err) => {
//   console.log(err);
// });

//these callback function stacks and gets annoying -> use promises
// const onSuccess = (blogs) => {
//   setBlogs(blogs);
// }
// const onError = (err) => {
//   console.log(err)
// }

// blogService.getBlogs(onSuccess, onError);