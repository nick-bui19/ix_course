import React from "react";
import {Link} from "react-router-dom";
import BlogItemText from "../BlogItemText";

import "../../App.css";
import "./index.css";

export default function BlogItem({
  index,
  blogPost,
  setBlog,
  imageOrientation,
}) {
  const blogLink = `/blogs/${blogPost.id}`;

  if (imageOrientation === "top") {
    return (
      <div
        key={index}
        className="card-1"
        onClick={() => console.log("Navigating to Blog")}
      >
        <Link to={blogLink}>
          <img src={blogPost.image} className="card-img-top" alt="..." />
          <div className="card-text-bottom">
            <BlogItemText
              blogPost={blogPost}
              headerFontSize={20}
            ></BlogItemText>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div
        key={index}
        className="card-2"
        onClick={() => console.log("TODO: nav to blog")}
      >
        <Link to={blogLink}>
          <img src={blogPost.image} className="card-img-left" alt="..." />
          <div className="card-text-right">
            <BlogItemText
              blogPost={blogPost}
              headerFontSize={20}
            ></BlogItemText>
          </div>
        </Link>
      </div>
    );
  }
}