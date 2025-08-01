import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog'
import BlogDetails from './pages/BlogDetails';
import Bookmarks from './pages/Bookmarks'; // Import the Bookmarks component
import EditBlog from './pages/EditBlog';
import Footer from './components/Footer';
export default function App() {
  return (
    <Router>
      <BlogProvider>
        <div className="bg-gray-50 min-h-screen font-sans">
          <Navbar />
          <main className="container mx-auto py-8 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateBlog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/edit/:id" element={<EditBlog />} />
              <Route path="/bookmarks" element={<Bookmarks />} /> {/* Add this new route */}
            </Routes>
          </main>
        </div>
        <Footer /> 
      </BlogProvider>
    </Router>
  );
}