import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div style={{ margin: "0px 5%" }} className="container-fluid pt-2 pb-2">
        <Link className="navbar-brand" to="/home">
          iX Software Engineering Blog
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              <Link className="nav-link active" aria-current="page" to="/categories">
                Categories
              </Link>
              <Link className="nav-link active" aria-current="page" to="/blogs">
                Blogs
              </Link>
              <Link className="nav-link active" aria-current="page" to="/home" /* TODO */>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}