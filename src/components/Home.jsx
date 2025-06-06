import React from 'react';

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundImage: `url('/bg-mountain.jpg')` }} // Put your image in /public
    >
      {/* Hero Content */}
      <div className="bg-black bg-opacity-40 p-8 rounded-lg max-w-2xl backdrop-blur-sm">
        <h1 className="text-5xl font-bold mb-4">Heal Your Feel</h1>
        <p className="text-lg md:text-xl mb-6">
          Healing begins when you choose to take care of yourself and begin to self-love.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            Try It Free on Google Play
          </button>
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            App Store
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
