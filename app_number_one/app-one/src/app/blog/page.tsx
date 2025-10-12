import Link from "next/link";

const BlogHome = () => {
  return (
    <div>
      <h1>Blog Home Page</h1>
      <div>
        <h2>Blog Posts</h2>
        <ul>
          <li>
            <Link href={"/blog/post-1"}>Post 1</Link>
          </li>
          <li>
            <Link href={"/blog/post-2"}>Post 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogHome;
