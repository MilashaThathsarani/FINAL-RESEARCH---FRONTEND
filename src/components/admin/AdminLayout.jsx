import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3E4227] text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">AURA Admin</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/dashboard" className="hover:text-green-300">Dashboard</Link>
          <Link to="/managecounsellors" className="hover:text-green-300">Manage Counsellors</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
