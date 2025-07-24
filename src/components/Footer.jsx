import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Logo & Intro */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/images/logo.png"
            alt="AURA Logo"
            className="w-16 h-19 mb-4 text-white"
          />
          <h3 className="text-2xl font-bold mb-2">AURA</h3>
          {/* <p className="text-gray-400 text-sm">
            Relax. Restore. Renew. <br />
            AURA helps you take care of your emotional well-being with sound therapy and mindful support.
          </p> */}
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-gray-400 text-sm mb-2">
            Email: support@aura-relax.com
          </p>
          <p className="text-gray-400 text-sm mb-2">
            Phone: +94 76 905 0886
          </p>
          <p className="text-gray-400 text-sm">
            Colombo, Sri Lanka
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AURA. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
