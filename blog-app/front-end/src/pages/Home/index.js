import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";

import blogService from "../../services/blogService";
import categoryService from "../../services/categoryService";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, reset as resetBlogs } from "../../features/blogsSlice";


export default function Home() {
  // const [blogs, setBlogs] = useState();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState();

  const {
    blogs,
    isError: isBlogsError,
    isSuccess: blogsSuccess,
    isLoading: isLoadingBlogs,
    message: blogsMessage,
  } = useSelector((state) => state.blogs);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const blogsRes = await blogService.fetchBlogs();
        dispatch(fetchBlogs);
        const categoryRes = await categoryService.fetchCategories();
        setBlogs(blogsRes.data);
        setCategories(categoryRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  if(isLoadingBlogs){
    return <Loading />;  
  }


  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <SubHeading subHeading={"Recent blog posts"} />
        <BlogGrid blogPosts={blogs} />
        <CategoriesList categories={categories} />
        <Footer />
      </div>
    </>
  );
}