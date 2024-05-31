const createBlogs = async (blog) => {
    try {
        // Uses a 'fetch' API to make a POST request to the specified URL.
        // 'await' keyword is used to wait for the response.
        const response = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", 
        {
            method: "POST",
            headers: {
                // Headers include 'Content-Type' to specify the type of content being sent.
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        });

        if (!response.ok) {
            try {
                let res = await response.json();
                throw res.message || JSON.stringify(res);
            } catch (err) {
                console.log(err);
                const error = new Error("Something went wrong");
                throw error.message;
            }
        }

        // Awaits for the data to be converted to the json format and stores it in
        // the 'blogsApiData' variable.
        const blogsApiData = await response.json();
        // Returns the data property from the 'blogsApiData' variable.
        return blogsApiData.data;
    } catch (error) {
        console.error("Error creating blog:", error);
        throw error;
    }
};

const getBlogs = async () => {
    try {
        //uses a 'fetch' API to make a GET request to the specified URL.
        //'await' keyword is used to wait for the response.
        const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", 
        {
            method: "GET",
            headers: {
                //headers include 'Content-Type' to specify the type of content being sent.
             "Content-Type": "application/json",
            },
        }
        );
        //awaits for the data to be converted to the json format and stores it in
        //the 'blogsApiData' variable.
        const blogsApiData = await data.json();
        //returns the data property from the 'blogsApiData' variable.
        return blogsApiData.data;
    } catch (error){}
};

const getBlogByID = async (id) => {
    try {
        //uses a 'fetch' API to make a GET request to the specified URL.
        //'await' keyword is used to wait for the response.
        const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", 
        {
            method: "GET",
            headers: {
                //headers include 'Content-Type' to specify the type of content being sent.
             "Content-Type": "application/json",
            },
            body: id,
        }
        );
        //awaits for the data to be converted to the json format and stores it in
        //the 'blogsApiData' variable.
        const blogsApiData = await data.json();
        //returns the data property from the 'blogsApiData' variable.
        return blogsApiData.data;
    } catch (error){}
};

const updateBlog = async () => {
    try {
        //uses a 'fetch' API to make a GET request to the specified URL.
        //'await' keyword is used to wait for the response.
        const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", 
        {
            method: "PUT",
            headers: {
                //headers include 'Content-Type' to specify the type of content being sent.
             "Content-Type": "application/json",
            },
        }
        );
        //awaits for the data to be converted to the json format and stores it in
        //the 'blogsApiData' variable.
        const blogsApiData = await data.json();
        //returns the data property from the 'blogsApiData' variable.
        return blogsApiData.data;
    } catch (error){}
};

const deleteBlog = async (id) => {
    try {
        //uses a 'fetch' API to make a GET request to the specified URL.
        //'await' keyword is used to wait for the response.
        const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs", 
        {
            method: "DELETE",
            headers: {
                //headers include 'Content-Type' to specify the type of content being sent.
             "Content-Type": "application/json",
            },
        }
        );
        //awaits for the data to be converted to the json format and stores it in
        //the 'blogsApiData' variable.
        const blogsApiData = await data.json();
        //returns the data property from the 'blogsApiData' variable.
        return blogsApiData.data;
    } catch (error){}
};

//creates a 'blogService' object with a property getBlogs that refer to the function up top.
const blogService = { 
    createBlogs,
    getBlogs, 
}


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