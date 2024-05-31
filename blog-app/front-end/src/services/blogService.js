const createBlog = async (blog) => {
    const response = await fetch("http://localhost:8000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
};

  const fetchBlogs = async () => {
    const response = await fetch("http://localhost:8000/api/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
};

const fetchBlogById = async (id) => {
  const response = await fetch("http://localhost:8000/api/blogs/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};

const fetchBlogsByCategoryId = async (categoryId) => {
    const response = await fetch(
      "http://localhost:8000/api/blogs/category/" + categoryId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
};

const fetchBlogsByAuthorId = async (authorId) => {
    const response = await fetch(
      "http://localhost:8000/api/blogs/author/" + authorId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
};

const updateBlog = async (blog) => {
    //uses a 'fetch' API to make a GET request to the specified URL.
    //'await' keyword is used to wait for the response.
    const response = await fetch("http://localhost:8000/api/blogs/" + blog.id, {
      method: "PUT",
      headers: {
        //headers include 'Content-Type' to specify the type of content being sent.
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
    //awaits for the data to be converted to the json format and stores it in
    //the 'responseData' variable.
    const responseData = await response.json();
    //returns the data property from the 'responseData' variable.
    return responseData;
};

const deleteBlogsById = async (id) => {
    const response = await fetch("http://localhost:8000/api/blogs/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
};

//creates a 'blogService' object with a property getBlogs that refer to the function up top.
const blogService = {
    createBlog,
    fetchBlogs,
    fetchBlogById,
    fetchBlogsByCategoryId,
    fetchBlogsByAuthorId,
    updateBlog,
    deleteBlogsById,
  };

//makes it so that 'blogService' is the default export of the module, making it available for
//import in other files.
export default blogService;

// return new Promise((resolve, reject) => {
        // fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   });
//promise
       // .then((response) => {
        //   if (!response.ok) {
        //     throw new Error('Network response was not ok');
        //   }
        //   return response.json();
        // })
        // .then((data) => {
        //   console.log("Success");
        //   resolve(data); // Resolve the promise with the data
        // })
        // .catch((error) => {
        //   console.log("Error:", error);
        //   reject(error); // Reject the promise with the error
        // });
    // });


    //callback???
// const getBlogs = (onSuccess, onError) => {
//     fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", {
//         method:"GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//     .then((data) => {
//         console.log("Success");
//         handleResponse(data, onSuccess, onError);
//     })
//     .catch((error) => {
//         console.log("Error");
//         onError();
//     })
// }

//.then and .catch are like if and else clauses
// const handleResponse = (data, onSuccess, onError) => {
//     data.json().then((blogs) => {
//         onSuccess(blogs);
//         console.log(blogs);
//         onSuccess();
//     })
//     .catch((error) => {
//         onError(error);
//     })
// }