import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './Components/Pages/HomePage/index.js';
import BlogsPage from './Components/Pages/BlogsPage/index.js';
import CategoriesPage from './Components/Pages/CategoriesPage/index.js';

// import "boostrap/dist/js/bootstrap.min.js";
// import "boostrap/dist/js/bootstrap.bundle.min";
// import "bootstrap-icons/dotn/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;