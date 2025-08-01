import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import sampleBlogs from "../data/sampleBlogsData"; 



const Home = () => {
  const [blogs, setBlogs] = useState(sampleBlogs);

  return (
    <div className="p-8 mx-auto w-full"> 
      <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>
      {blogs.length === 0 ? (
        <div className="text-gray-500">No blog posts yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;