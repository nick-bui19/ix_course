import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "./index.css";

export default function CategoryList({ categories }) {
  const navigate = useNavigate();

  if (!categories || !Array.isArray(categories)) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="category-list">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            className="card"
            style={{ borderRadius: "0px", border: "none" }}
            onClick={() => {
              navigate("/blogs/" + category.id);
            }}
          >
          </div> 
        );
      })}
    </div>
  );
}

//test comment

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
}