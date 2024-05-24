import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div style={{ margin: "0px 5%" }} className="container-fluid pt-2 pb-2">
        <a className="navbar-brand" href="#">
          iX Software Engineering Blog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-flex w-100 justify-content-center align-items-center">
              <a className="nav-link active" aria-current="page" href="../Pages/HomePage/index.js">
                Home
              </a>
              <a className="nav-link active" aria-current="page" href="../Pages/CategoriesPage/index.js">
                Categories
              </a>
              <a className="nav-link active" aria-current="page" href="/BlogsPage">
                Blogs
              </a>
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}