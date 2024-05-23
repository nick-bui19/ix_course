import React from "react";

export default function Categories({ blogPost }) {
  return (
    <div className="flex-wrap d-flex">
      {blogPost.categories.map((category, index) => {
        return (
          <p
            key={index}
            className="category-tag rounded-pill p-1 m-1"
            style={{
              color: category.color,
              backgroundColor: category.color + "33",
            }}
          >
            {category.title}
          </p>
        );
      })}
    </div>
  );
}