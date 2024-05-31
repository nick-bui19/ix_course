import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogList from "../../components/BlogList";
import SubHeading from "../../components/SubHeading";
import Footer from "../../components/Footer";
import AddEditBlogModal from "../../components/AddEditBlogModal";

import blogService from "../../services/blogService";
import categoriesService from "../../services/categoriesService"; 

import "../../App.css";
import "./index.css";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRes = await blogService.fetchBlogs();
        setBlogs(blogsRes); // Assuming blogsRes.data is an array of blogs
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
        setCategories(categoriesRes); // Assuming categoriesRes.data is an array of categories
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const { categoryId: categoryIdParam } = useParams();

  useEffect(() => {
    if (categoryIdParam) {
      setSelectedCategory(categoryIdParam);
    }
  }, [categoryIdParam]);

  useEffect(() => {
    if (selectedCategory) {
      const fetchFilteredBlogs = async () => {
        try {
          const filteredBlogsRes = await blogService.fetchBlogsByCategoryId(selectedCategory); // Assuming there's an endpoint for this
          setBlogs(filteredBlogsRes.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchFilteredBlogs();
    } else {
      const fetchAllBlogs = async () => {
        try {
          const allBlogsRes = await blogService.fetchBlogs();
          setBlogs(allBlogsRes.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllBlogs();
    }
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const renderCategories = () => {
    if (!categories || categories.length === 0) {
      return <p>Loading categories...</p>; // Loading state for categories
    }

    return categories.map((category) => (
      <button
        key={category.id}
        onClick={() => handleCategoryClick(category.id)}
        style={{ color: selectedCategory === category.id.toString() ? "blue" : "black" }}
        className="category-button"
      >
        {category.title}
      </button>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Categories"} />
        <div className="scroll-menu">
          {renderCategories()}
        </div>
        <div>
          <SubHeading subHeading={"Blog Posts"} />  
          <button className="btn btn-outline-dark h-75">ADD BLOG</button>
          <AddEditBlogModal>ADD BLOG</AddEditBlogModal>
        </div>
        <BlogList blogPosts={blogs} />
      </div>
      <Footer />
    </>
  );
}
