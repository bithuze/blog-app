import React, { useState } from 'react';

const BlogForm = ({ initialValues = {}, onSubmit, submitLabel = 'Submit' }) => {
  const [form, setForm] = useState({
    title: initialValues.title || '',
    author: initialValues.author || '',
    description: initialValues.description || '',
    content: initialValues.content || '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError('Title is required');
      return;
    }
    setError('');
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow max-w-md mx-auto" // <-- Changed colors and added max-width and centering
    >
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <div>
        <label className="block font-medium mb-1 text-gray-700">Title *</label> {/* <-- Adjusted text color */}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" // <-- Consistent border and focus styles
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1 text-gray-700">Author</label> {/* <-- Adjusted text color */}
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" // <-- Consistent border and focus styles
        />
      </div>
      <div>
        <label className="block font-medium mb-1 text-gray-700">Description</label> {/* <-- Adjusted text color */}
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" // <-- Consistent border and focus styles
        />
      </div>
      <div>
        <label className="block font-medium mb-1 text-gray-700">Content</label> {/* <-- Adjusted text color */}
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded min-h-[100px] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" // <-- Consistent border and focus styles
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default BlogForm;