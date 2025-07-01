import React from 'react';

function Signup() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your AURA Account
        </h2>

        <form className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

           {/* Last Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Birthday */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Birthday</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

           {/* Email*/}
          <div>
            <label className="block text-gray-700 font-medium mb-1">E mail</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Contact Number</label>
            <input
              type="tel"
              placeholder="07x xxx xxxx"
              className="w-full border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

           {/* cancel */}
          <button
            type="cancel"
            className="w-30 ml-1 bg-red-600 text-white font-semibold py-1 rounded-lg hover:bg-red-800 transition"
          >
            Cancel
          </button>

          {/* Submit */}
          <button
            type="submit"
            className="w-30 mr-3 bg-indigo-600 text-white font-semibold py-1 rounded-lg hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
