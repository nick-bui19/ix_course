const createBlog = async (blog) => {
  const response = await fetch("http://localhost:8000/api/blogs", {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
    },
    body: blog,
  });

  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong 1");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};

const fetchBlogs = async () => {
  const response = await fetch("http://localhost:8000/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong 2");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};

const fetchBlogByID = async (id) => {
  const response = await fetch("http://localhost:8000/api/blogs/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong 3");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};

//this is the buggy function
const fetchBlogsByCategoryId = async (categoryId) => {
  const response = await fetch(
    "http://localhost:8000/api/blogs/categories/" + categoryId,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong 4");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
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
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong 5");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};

const updateBlog = async (blog) => {
  const response = await fetch(
    "http://localhost:8000/api/blogs/" + blog.get("id"),
    {
      method: "PUT",
      headers: {
        // "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
      body: blog,
    }
  );
  
  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong 6");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};

const deleteBlog = async (id) => {
  const response = await fetch("http://localhost:8000/api/blogs/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
    },
  });

  if (!response.ok) {
    try {
      let res = await response.json();
      throw res.message || JSON.stringify(res);
    } catch (err) {
      console.log(err);
      const error = new Error("Something went wrong 7");
      throw error.message;
    }
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};

const blogService = {
  createBlog,
  fetchBlogs,
  fetchBlogByID,
  fetchBlogsByCategoryId,
  fetchBlogsByAuthorId,
  updateBlog,
  deleteBlog,
};

export default blogService;