import logo from './logo.svg';

import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './Components/HomePage/index.js';
import CategoriesPage from './Components/CategoriesPage/index.js';


// import "boostrap/dist/js/bootstrap.min.js";
// import "boostrap/dist/js/bootstrap.bundle.min";
// import "bootstrap-icons/dotn/bootstrap-icons.css";

// const HomePage = () => {
//   return (
//     <div>
//       <h1 className="m-5">My Blog App</h1>
//       <p style={{ fontSize: "18px" }}>
//         Welcome to my blog! I'm excited to share my thoughts with the world.
//       </p>
//       <div
//         style={{ width: "100%", display: "flex", justifyContent: "center" }}
//         className="m-5 p-5"
//       >
//         <div className="card m-5" style={{ width: "18rem" }}>
//           <img src={logo} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href="#" className="btn btn-primary">
//               Read
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <CategoriesPage />
    </div>
  );
}

export default App;