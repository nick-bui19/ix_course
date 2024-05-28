import React from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './Pages/HomePage/index.js';
import BlogsPage from './Pages/BlogsPage/index.js';
import BlogDetailPage from './Pages/BlogsDetailPage/index.jsx';
import CategoriesPage from './Pages/CategoriesPage/index.js';

// import "boostrap/dist/js/bootstrap.min.js";
// import "boostrap/dist/js/bootstrap.bundle.min";
// import "bootstrap-icons/dotn/bootstrap-icons.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/categories",
    element: <CategoriesPage />
  },  
  {
    path: "/blogs",
    element: <BlogsPage />
  },
  {
    path: "/blogs/:blogId",
    element: <BlogDetailPage />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;