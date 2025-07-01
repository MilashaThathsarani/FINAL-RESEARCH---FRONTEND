import React from 'react';

function AboutUs() {
  return (
    <>
      {/* Section 1: About Text and Image */}
      <section className="bg-white py-16 px-6 md:px-16" id="about">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-amber-800 pl-4">
              Mind Tranquility Through Relaxation
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              AURA is designed to help individuals calm their minds, manage emotions,
              and improve well-being through music, meditation, and AI support.
              In a world full of stress and distractions, AURA offers a mindful experience
              to restore inner peace and emotional balance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether you’re feeling anxious, overwhelmed, or simply want to relax,
              AURA gives you access to mood-based audio, a friendly AI chatbot,
              and professional guidance—all in one calming digital space.
            </p>
            <button className="bg-amber-800 text-white px-6 py-3 rounded-lg transition">
              Read More
            </button>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/images/meditation-about.jpg" 
              alt="Relaxing meditation" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Cool Facts and Download Promo */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side: App Promotion */}
          <div className="bg-amber-700 rounded-xl shadow-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Download Now</h3>
            <p className="mb-6">
              Get AURA on your device and start your journey toward peace and relaxation.
            </p>
            <img
              src="/images/app-mockup.png"
              alt="App Mockup"
              className="w-48 mx-auto mb-6 rounded-lg shadow-lg"
            />
            <div className="flex justify-center gap-4">
              <a href="#play">
                <img
                  src="/icons/google-play.png"
                  alt="Google Play"
                  className="w-32"
                />
              </a>
              <a href="#appstore">
                <img
                  src="/icons/app-store.png"
                  alt="App Store"
                  className="w-32"
                />
              </a>
            </div>
          </div>

          {/* Right Side: Cool Facts */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
              Cool Facts About AURA
            </h3>
            <p className="text-gray-600 mb-8">
              AURA is designed with expert knowledge of meditation and music therapy.
              It helps you relax, schedule your favorite moods, and find your balance on your own time.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="bg-blue-100 text-blue-800 rounded-full px-6 py-4 text-center shadow">
                <p className="text-2xl font-bold">20k+</p>
                <p className="text-sm">Downloads</p>
              </div>
              <div className="bg-blue-200 text-blue-900 rounded-full px-6 py-4 text-center shadow">
                <p className="text-2xl font-bold">200</p>
                <p className="text-sm">Tracks</p>
              </div>
              <div className="bg-blue-300 text-blue-900 rounded-full px-6 py-4 text-center shadow">
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm">Composers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
