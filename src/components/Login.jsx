import React from 'react';
import { Link } from 'react-router-dom';

import Signup from './SignUp';

function Login() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
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
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Submit */}
            <Link to="/trackshomepage"
                  className="bg-amber-800 text-white px-5 py-1 rounded-full hover:bg-amber-950 transition w-max inline-block text-center">
                  Login
              </Link>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">

         <Link to="/signup" className="text-indigo-600 hover:underline">
             Don’t have an account? Sign Up...
            </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
