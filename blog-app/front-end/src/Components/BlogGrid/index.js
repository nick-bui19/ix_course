import React from "react";

import "./index.css";

import BlogItem from "../BlogItem";

export default function BlogGrid({ blogPosts }) {
  if (!blogPosts || !blogPosts.length) {
    return null;
  }

  return (
    <>
      <div className="blog-grid-container d-flex py-2 w-100">
        <div className="item-1 w-50 pr-12">
          {blogPosts.length > 0 && (
            <BlogItem
              imageOrientation={"top"}
              index={0}
              blogPost={blogPosts[0]}
            />
          )}
        </div>

        <div className="right-block">
          {blogPosts.length > 1 && (
            <div className="item-2 h-50 pl-12 pb-4">
              <BlogItem
                imageOrientation={"left"}
                index={1}
                blogPost={blogPosts[1]}
              />
            </div>
          )}

          {blogPosts.length > 2 && (
            <div className="item-3 h-50 pl-4">
              <BlogItem index={2} blogPost={blogPosts[2]} />
            </div>
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

// export default function BlogGrid({ blogPosts }) {
//   if (!blogPosts || !blogPosts.length) {
//     return null;
//   }

//   return (
//     <div className="blog-grid-container">
//       {blogPosts.map((blogPost) => {
//         return (
//           <button
//             key={blogPost.id}
//             className="card"
//             style={{ borderRadius: "0px", border: "none" }}
//             onClick={() => {
//               console.log("TODO: Navigate to categories page");
//             }}
//           >
//             <div
//               className="card-body d-flex w-100 justify-content-left align-items-center"
//               style={{
//                 // backgroundColor: category.color + "33",
//                 position: "relative",
//                 zIndex: 0, 
//               }}
//             >
//               <h5 className="card-title">{blogPost.title}</h5>
//             </div>
//             <div className="card-body">
//               <p className="card-text" style={{textAlign: "left"}}>
//                 {blogPost.description.substring(1, 100)} ...
//               </p>
//             </div>
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// export default function BlogGrid({ blogPosts }) {
//   if (!blogPosts || !blogPosts.length) {
//     return null;
//   }

//   return (
//     <div className="blog-grid-container">
//       {blogPosts.slice(0, 3).map((blogPost) => (
//         <div key={blogPost.id} className="blog-item">
//           <BlogItem blogPost={blogPost} />
//         </div>
//       ))}
//     </div>
//   );
// }