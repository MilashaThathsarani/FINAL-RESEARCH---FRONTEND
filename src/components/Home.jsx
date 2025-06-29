import React from 'react';

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{ backgroundImage: `url('/bg-mountain.jpg')` }} // Replace with your background
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-blue-200 bg-opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          Heal Your Feel
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mb-8 drop-shadow-sm">
          Healing begins when you choose to take care of yourself and begin to self-love
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-12">
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition shadow-md">
            Try It Free on
            <img
              src="/icons/google-play.png"
              alt="Google Play"
              className="inline-block w-5 ml-2"
            />
          </button>
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition shadow-md">
            App Store
            <img
              src="/icons/app-store.png"
              alt="App Store"
              className="inline-block w-5 ml-2"
            />
          </button>
        </div>

        {/* Phone UI Preview */}
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 w-80 text-left text-sm text-white shadow-md">
          <h3 className="text-lg font-semibold mb-2">🎵 Tranquil</h3>
          <p className="mb-2">
            Calm atmospheric music to heal your soul and reduce stress.
            Great for mood, focus, or winding down.
          </p>
          <p className="text-yellow-400 mb-2">⭐⭐⭐⭐☆</p>
          <div className="bg-white bg-opacity-30 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-400 w-1/3 h-full"></div>
          </div>
          <p className="text-right text-xs mt-1">0:03 / 5:11</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
