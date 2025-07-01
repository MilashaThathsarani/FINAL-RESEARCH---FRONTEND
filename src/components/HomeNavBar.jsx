import React from 'react';
import { Link } from 'react-router-dom';

function HomeNavBar() {
  return (
    <header className="top-10 left-0 right-0 z-50 bg-white text-amber-900">
      <nav className="max-w-7xl h-30  mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          AURA
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li><a href="#home" className="hover:text-blue-200 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-200 transition">About</a></li>
          <li><a href="#features" className="hover:text-blue-200 transition">Features</a></li>
          <li><a href="#chat" className="hover:text-blue-200 transition">Blog</a></li>
          <li><a href="#contact" className="hover:text-blue-200 transition">Contact</a></li>
          <li>
            {/* <Link to="/login" className="hover:text-amber-950 transition bg-amber-800 text-white ">
              Login
            </Link> */}

           <Link
              to="/login"
              className="bg-amber-800 text-white px-5 py-1 rounded-full hover:bg-amber-950 transition w-max inline-block text-center">
              Login
          </Link>

          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeNavBar;
