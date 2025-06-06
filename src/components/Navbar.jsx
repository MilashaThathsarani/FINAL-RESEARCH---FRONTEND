import React from 'react';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          AURA
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li><a href="#home" className="hover:text-blue-200 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-200 transition">About</a></li>
          <li><a href="#features" className="hover:text-blue-200 transition">Features</a></li>
          <li><a href="#chat" className="hover:text-blue-200 transition">AI Chat</a></li>
          <li><a href="#contact" className="hover:text-blue-200 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
