// src/pages/CreateBlog.jsx (or wherever you are using BlogForm)
import React, { useState } from 'react';
import BlogForm from '../components/BlogForm'; // Adjust path if needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const CreateBlog = () => {
  const navigate = useNavigate();
 
  const [allBlogs, setAllBlogs] = useState([]); 

  const handleCreateNewBlog = (formData) => {
    console.log('Form submitted with data:', formData);

    // Simulate adding a new blog with a unique ID and timestamp
    const newBlog = {
      id: String(Date.now()), // Simple unique ID for demonstration
      ...formData,
      createdAt: new Date().toISOString(),
      // Add a default imageUrl or handle image upload later
      imageUrl: 'hero.jpg', // Placeholder image
    };

    // In a real application, you would make an API call here:
    // fetch('/api/blogs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newBlog)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Blog created successfully:', data);
    //   setAllBlogs(prevBlogs => [...prevBlogs, data]); // Update state if successful
    //   navigate('/'); // Redirect to home or blog details
    // })
    // .catch(error => console.error('Error creating blog:', error));


    // For now, let's just add it to our simulated list and redirect
    setAllBlogs(prevBlogs => [...prevBlogs, newBlog]); // This line isn't actually used to update your Home page sampleBlogs
                                                      // but demonstrates how you'd manage state.
    alert('Blog created successfully!'); // Simple feedback
    navigate('/'); // Redirect to the homepage after submission
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Create New Blog Post</h1>
      <BlogForm onSubmit={handleCreateNewBlog} submitLabel="Create Blog" />
    </div>
  );
};

export default CreateBlog;