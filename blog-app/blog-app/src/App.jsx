import logo from './logo.svg';

import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './Components/HomePage/index.js';
import BlogsPage from './Components/BlogsPage/index.js';
import CategoriesPage from './Components/CategoriesPage/index.js';

// import "boostrap/dist/js/bootstrap.min.js";
// import "boostrap/dist/js/bootstrap.bundle.min";
// import "bootstrap-icons/dotn/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <BlogsPage />
    </div>
  );
}

export default App;