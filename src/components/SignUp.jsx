import React from 'react';

function Signup() {
  return (
    <section className="min-h-screen bg-blue-950 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-5">

        {/* Logo at the top */}
        <div className="flex justify-center mb-5">
          <img
            src="/images/logo.png"
            alt="AURA Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your AURA Account
        </h2>

        <form className="space-y-5">

          {/* First & Last Name in One Row */}
          <div className="flex space-x-4">
            {/* First Name */}
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">First Name</label>
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
          </div>

          {/* Birthday */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Birthday</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Contact Number</label>
            <input
              type="tel"
              placeholder="07x xxx xxxx"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-950 text-white font-semibold py-2 rounded-lg hover:bg-blue-900 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
