import React, { useEffect, useState } from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/BlogGrid";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoryList";
import Footer from "../../components/Footer";

import blogService from "../../services/blogService";
import categoriesService from "../../services/categoriesService";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import Loading from "../../components/Loading";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
// const data = require("../../dummy-data.json");
// const blogs = data.blogPosts.reverse();
// const categories = data.categories;

export default function Home() {
  const [loading, setLoading] = useState();
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState();
  const [message, setMessage] = useState();
  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsRes = await blogService.fetchBlogs();
        const categoryRes = await categoriesService.fetchCategories();
        setBlogs(blogsRes.data.reverse());
        setCategories(categoryRes.data);
        setLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(err);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <SubHeading subHeading={"Recent blog posts"} />
        <BlogGrid blogs={blogs} />
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories} />
        <Footer />
        <SuccessToast
          show={isSuccess}
          message={message}
          onClose={() => {
            setIsSuccess(false);
          }}
        />
        <ErrorToast
          show={isError}
          message={message}
          onClose={() => {
            setIsError(false);
          }}
        />
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