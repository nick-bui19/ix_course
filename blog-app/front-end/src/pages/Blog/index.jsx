import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogService from "../../services/blogService";

export default function BlogDetailPage() {
  const { blogId } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await blogService.getBlog(blogId);
        setBlogPost(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogPost();
  }, [blogId]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.description}</p>
      <img src={blogPost.image} alt={blogPost.title} />
      {/* Render the rest of the blog post content */}
    </div>
  );
}
