import React, { useState, useRef } from 'react';
import { FaUserCircle, FaSignOutAlt, FaTrashAlt, FaSave, FaCamera } from 'react-icons/fa';

function MyProfile() {
  const [profile, setProfile] = useState({
    firstName: 'Milasha',
    lastName: 'Thathsarani',
    birthday: '1995-08-15',
    email: 'milasha@example.com',
    contactNumber: '0712345678',
    avatar: '/images/logo.png',
  });

  // Ref to the hidden file input
  const fileInputRef = useRef(null);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle profile picture click
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert('Profile saved!\n' + JSON.stringify(profile, null, 2));
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deleted!');
      // Add actual delete logic here
    }
  };

  const handleLogout = () => {
    alert('Logout clicked!');
    // Add actual logout logic here
  };

  return (
    <div className="min-h-screen bg-[#3E4227] flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8">
        <div className="flex flex-col items-center text-center mb-6 relative">
          <img
            src={profile.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-2 border border-green-300 object-cover cursor-pointer hover:opacity-90 transition"
            onClick={handleAvatarClick}
          />
          <button
            onClick={handleAvatarClick}
            className="flex items-center text-sm text-green-700 hover:text-green-900 transition"
          >
            <FaCamera className="mr-1" /> Change Photo
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <h2 className="text-2xl font-bold text-[#3E4227] mt-2">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-green-900">{profile.email}</p>
        </div>

        <form className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-1/2 border border-green-700 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-900"
            />
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-1/2 border border-green-700 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-900"
            />
          </div>

          <input
            type="date"
            name="birthday"
            value={profile.birthday}
            onChange={handleChange}
            className="w-full border border-green-700 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-900"
          />

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-green-700 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-900"
          />

          <input
            type="text"
            name="contactNumber"
            value={profile.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full border border-green-700 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-900"
          />
        </form>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleSave}
            className="flex items-center bg-[#3E4227] hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            <FaSave className="mr-2" /> Save Changes
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center bg-yellow-600 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>

        <button
          onClick={handleDeleteAccount}
          className="flex items-center justify-center mt-4 w-full bg-red-800 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          <FaTrashAlt className="mr-2" /> Delete Account
        </button>
      </div>
    </div>
  );
}

export default MyProfile;
