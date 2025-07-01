import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      {/* <div className="bg-white rounded-3xl shadow-lg max-w-6xl w-full grid md:grid-cols-2 gap-12 p-10 md:p-16"> */}
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Elevate your <br /> Soul with <span className="text-amber-900">AURA</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Meditation principles and calming audio are the building blocks of relaxation with AURA. Discover peace, clarity, and balance.
          </p>
          <button className="bg-amber-800 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition w-max">
            Get Started
          </button>
        </div>

        {/* Right Side: Illustration & Features */}
        <div className="flex flex-col items-center text-center md:text-left">
          <img
            src="/images/yoga-pose.png"
            alt="Yoga Illustration"
            className="w-72 mb-8 rounded-xl shadow-md"
          />

          <div className="space-y-4 w-full">
            <div className="flex items-start gap-4">
              <span className="bg-pink-100 text-pink-600 p-2 rounded-full">
                🧘
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Meditation</h4>
                <p className="text-gray-600 text-sm">
                  Calming soundscapes and mindfulness guidance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-pink-100 text-pink-600 p-2 rounded-full">
                ⚡
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Boost Energy</h4>
                <p className="text-gray-600 text-sm">
                  Music to lift your mood and energize your day.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-pink-100 text-pink-600 p-2 rounded-full">
                🌿
              </span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Stress Relief</h4>
                <p className="text-gray-600 text-sm">
                  Gentle sounds to reduce anxiety and promote calm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Home;
