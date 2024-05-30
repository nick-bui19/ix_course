import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoryList";
import Footer from "../../components/Footer";

import blogService from "../../services/blogService";
import categoriesService from "../../services/categoriesService"; 

import "../../App.css";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
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

  return (
    <>
      <Navbar />  
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Categories"} />
        {categories.length > 0 ? (
          <CategoryList categories={categories} />
        ) : (
          <p>Loading categories...</p>
        )}
        <Footer />
      </div>
    </>
  );
}

// // Week 1: Import the blogPosts and categories from the dummy-data.json file
// const data = require("../../dummy-data.json");
// const categories = data.categories;