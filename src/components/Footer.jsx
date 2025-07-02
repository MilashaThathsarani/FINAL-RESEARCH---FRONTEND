import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#3E4227] text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Intro */}
        <div>
          <h3 className="text-2xl font-bold mb-2">AURA</h3>
          <p className="text-gray-400 text-sm">
            Relax. Restore. Renew. <br />
            AURA helps you take care of your emotional well-being with sound therapy and mindful support.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-gray-400 text-sm">
            Email: support@aura-relax.com <br />
            Phone: +94 71 234 5678 <br />
            Address: Colombo, Sri Lanka
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AURA. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
