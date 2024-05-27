import React from "react";

import "./index.css";

import BlogItem from "../BlogItem";

export default function BlogList({ blogPosts }) {
  if (!blogPosts || !blogPosts.length) {
    return null;
  }

  return (
    <>
      <div className="blog-grid-container d-flex py-2 w-100">
        <div className="item-1 w-33.33 pr-3">
          {blogPosts.length > 0 && (
            <BlogItem
                imageOrientation={"top"}
                index={0}
                blogPost={blogPosts[0]}
            />
          )}
        </div>

        <div className="item-2 w-33.33 pr-5 h-100">
          {blogPosts.length > 1 && (
            <BlogItem
                imageOrientation={"top"}
                index={1}
                blogPost={blogPosts[1]}
            />
          )}
        </div>

        <div className='item-3 w-33.33 pr-4 h-100'>
          {blogPosts.length > 2 && (
            <BlogItem 
                imageOrientation={"top"}
                index={2}
                blogPost={blogPosts[2]} 
            />
          )}
        </div>
      </div>
      {blogPosts.length > 3 && (
        <div className="item-4">
          <BlogItem index={3} blogPost={blogPosts[3]} />
        </div>
      )}
    </>
  );
}