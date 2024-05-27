import React, { useState } from "react";

import Heading from "../../Components/Heading";
import Navbar from "../../Components/Navbar";
import BlogGrid from "../../Components/BlogGrid";
import SubHeading from "../../Components/SubHeading";
import CategoryList from "../../Components/CategoryList";
import Footer from "../../Components/Footer";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const blogs = data.blogPosts.reverse();
const categories = data.categories;

export default function HomePage() {
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