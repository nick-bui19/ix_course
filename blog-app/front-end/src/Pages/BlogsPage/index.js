import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Heading from "../../Components/Heading";
import Navbar from "../../Components/Navbar";
import BlogList from "../../Components/BlogList";
import SubHeading from "../../Components/SubHeading";
// import CategoriesList from "../../Components/CategoriesList";
import Footer from "../../Components/Footer";

import "../../App.css";
import "./index.css";

const data = require("../../dummy-data.json");
const initialBlogPosts = data.blogPosts.reverse();
const categories = data.categories;

export default function BlogsPage() {
  const { categoryId: categoryIdParam } = useParams();
  const [categoryId, setCategoryId] = useState(undefined);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    function printHI() {
      console.log("HI");
    }

    function printThere() {
      setBlogs((prevBlogs) => {
      console.log("there");
      }, 500);
    }

    function printiX() {
      console.log("iX");
    }

    printHI();
    printThere();
    printiX();
  }, []); // Empty dependency array to run this effect only once

  useEffect(() => {
    // Filter the blogPosts based on the categoryId
    const filteredBlogs = initialBlogPosts.filter((x) =>
      categoryId !== undefined
        ? x.categories.find((y) => y.id.toString() === categoryId.toString())
        : true
    );
    setBlogs(filteredBlogs);
  }, [categoryId]);

  const CategoriesList = ({ categoryId }) => {
    return categories.map((category) => (
      <button
        key={category.id}
        onClick={() => setCategoryId(category.id)}
        style={{ color: categoryId === category.id.toString() ? "blue" : "black" }}
      >
        <p>{category.title}</p>
      </button>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList categoryId={categoryId} />
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
