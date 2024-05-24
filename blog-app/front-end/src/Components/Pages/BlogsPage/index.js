import React from "react";

import Heading from "../../Heading";
import Navbar from "../../Navbar";
import BlogGrid2 from "../../BlogGridBlogPage";
import SubHeading from "../../SubHeading";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../../dummy-data.json");
const blogs = data.blogPosts.reverse();

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid2 blogPosts={blogs}></BlogGrid2>
        {/* <Footer /> */}
      </div>
    </>
  );
}