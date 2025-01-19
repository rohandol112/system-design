import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-500 mx-2" />
            <span>by Rohan Dol</span>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com/rohandol112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rohan-dol-44b62a214/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;