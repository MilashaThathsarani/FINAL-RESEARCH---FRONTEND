import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUserMd, FaCog } from 'react-icons/fa';

function AdminLayout() {
  return (
    <div className="w-64 bg-white shadow-lg min-h-screen px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">AURA Admin</h2>
      <nav className="space-y-6">
        <Link to="/dashboard" className="flex items-center text-blue-900 hover:text-blue-700">
          <FaTachometerAlt className="mr-3" /> Dashboard
        </Link>
        <Link to="/counselors" className="flex items-center text-blue-900 hover:text-blue-700">
          <FaUserMd className="mr-3" /> Counselors
        </Link>
        <Link to="/settings" className="flex items-center text-blue-900 hover:text-blue-700">
          <FaCog className="mr-3" /> Settings
        </Link>
      </nav>
    </div>
  );
}

export default AdminLayout;