import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Eye icons

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  return (
    <section className="min-h-screen bg-blue-950 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">

        {/* Logo at the top */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.png"
            alt="AURA Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          AURA Login
        </h2>

        <form className="space-y-6">

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>

          {/* Password with toggle */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <Link
            to="/moods"
            className="bg-blue-950 text-white px-5 py-2 rounded-lg hover:bg-blue-900 transition w-full text-center block"
          >
            Login
          </Link>
        </form>

        <p className="text-sm text-center text-blue-900 mt-4">
          <Link to="/signup" className="text-blue-900 font-semibold hover:underline">
            Don’t have an account? Sign Up...
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
