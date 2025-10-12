"use client";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>Blog Post Page</h1>
      <p>{slug}</p>
    </div>
  );
};

export default BlogPost;
