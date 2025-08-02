import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white text-white px-6 py-4 flex justify-between items-center w-full">
        <div className="font-bold text-lg">
          <Link to="/" className="text-black">My Blog</Link>
        </div>

        {/* Desktop menu */}
        <div className="space-x-6 hidden md:flex">
          <Link
            to="/"
            className={`px-4 py-2 rounded ${location.pathname === '/' ? 'bg-black text-white' : 'text-black hover:bg-gray-200'}`}
          >
            Home
          </Link>
          <Link
            to="/create"
            className={`px-4 py-2 rounded ${location.pathname === '/create' ? 'bg-black text-white' : 'text-black hover:bg-gray-200'}`}
          >
            Create Blog
          </Link>
          <Link
            to="/bookmarks"
            className={`px-4 py-2 rounded ${location.pathname === '/bookmarks' ? 'bg-black text-white' : 'text-black hover:bg-gray-200'}`}
          >
            Bookmarks
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none p-2 rounded-md hover:bg-gray-200">
            {isMenuOpen ? (
              <HiX className="h-6 w-6 text-black" />
            ) : (
              <HiMenu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden mt-4 bg-gray-100 rounded-lg shadow-lg overflow-hidden`}
      >
        <div className="flex flex-col space-y-2 p-4">
          <Link
            to="/"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
              location.pathname === '/' ? 'bg-black text-white' : 'text-black hover:bg-gray-200'
            }`}
          >
            Home
          </Link>
          <Link
            to="/create"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
              location.pathname === '/create' ? 'bg-black text-white' : 'text-black hover:bg-gray-200'
            }`}
          >
            Create Blog
          </Link>
          <Link
            to="/bookmarks"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
              location.pathname === '/bookmarks' ? 'bg-black text-white' : 'text-black hover:bg-gray-200'
            }`}
          >
            Bookmarks
          </Link>
        </div>
      </div>

      {/* Hero section only on home page */}
      {isHome && (
        <div className="flex justify-center mt-4">
          <div
            className="w-[1200px] h-[500px] bg-cover bg-center relative rounded-lg shadow-lg"
            style={{ backgroundImage: "url('/hero.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-4xl font-bold mb-2">Welcome to My Blog</h1>
              <p className="text-lg">Explore articles, ideas, and inspiration</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
