import React, {useEffect, useState} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link, useNavigate, useParams } from "react-router-dom";

import Heading from "../../Components/Heading";
import Navbar from "../../Components/Navbar";
import BlogList from "../../Components/BlogList";
import SubHeading from "../../Components/SubHeading";
// import CategoriesList from "../../Components/CategoriesList";
import Footer from "../../Components/Footer";

import "../../App.css";
import "./index.css";

const data = require("../../dummy-data.json");
const blogPosts = data.blogPosts.reverse();
const categories = data.categories;

export default function BlogsPage() {
  const { categoryId: categoryIdParam } = useParams();
  const [categoryId, setCategoryId] = useState(undefined);
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Week 1: Filter the blogPosts based on the categoryId
    const blogs = blogPosts.filter((x) =>
      categoryId !== undefined
        ? x.categories.find((y) => y.id.toString() === categoryId.toString())
        : true
    );
    setBlogs(() => blogs);
  }, [categoryId]);

  
  //Filtering blogs by the ctergoryId passed in the URL
  blogPosts = blogPosts.filter((x) =>
    categoryId !== undefined
      ? x.categories.find((y) => y.id.toString() === categoryId)
      : true
  );

  const CategoriesList = ({ categoryId }) => {
    return categories.map((category, index) => {
      return categoryId === category.id.toString() ? (
        <button key={category.id} onClick={() => setCategoryId(category.id)} style={{ color: "blue" }}>
          <p key={category.id}>{category.title}</p>
        </button>
      ) : (
        <button key={category.id} onClick={() => setCategoryId(category.id)} style={{ color: "black" }}>
          <p key={category.id}>{category.title}</p>
        </button>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList 
              categories={categories} 
              categoryId={categoryId}
              setCategoryId={setCategoryId}>
          </CategoriesList>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogPosts={blogs} />
      </div>
      <Footer />
    </>
  );
}