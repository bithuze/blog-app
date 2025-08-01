// src/pages/EditBlog.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: '',
    description: '',
    content: '',
  });

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const blogToEdit = storedBlogs.find(blog => blog.id === id);
    if (blogToEdit) {
      setBlogData({
        title: blogToEdit.title,
        description: blogToEdit.description,
        content: blogToEdit.content,
      });
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setBlogData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    const updatedBlogs = storedBlogs.map(blog =>
      blog.id === id
        ? {
            ...blog,
            ...blogData,
            editedAt: new Date().toISOString(), // Update editedAt
          }
        : blog
    );

    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    navigate('/'); // redirect to home
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>

      <input
        type="text"
        name="title"
        value={blogData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border p-2 rounded mb-4"
      />

      <input
        type="text"
        name="description"
        value={blogData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 rounded mb-4"
      />

      <textarea
        name="content"
        value={blogData.content}
        onChange={handleChange}
        placeholder="Full Content"
        rows={8}
        className="w-full border p-2 rounded mb-4"
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditBlog;