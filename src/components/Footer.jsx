import React from 'react';
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-12"> {/* Increased padding and margin-top for better spacing */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Blog Name */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          Blog
        </div>

        {/* Center Section: Copyright */}
        <div className="text-sm text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Blog. All rights are reserved.
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://t.me/yourtelegramusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-200"
            aria-label="Telegram"
          >
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="https://facebook.com/yourfacebookpage" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebookF size={22} /> 
          </a>
          <a
            href="mailto:youremail@example.com" 
            className="text-white hover:text-red-400 transition-colors duration-200"
            aria-label="Email"
          >
            <MdEmail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;