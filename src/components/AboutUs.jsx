import React from 'react';

function AboutUs() {
  return (
    <section className="bg-white py-16 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-l-4 border-indigo-500 pl-4">
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
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Read More
          </button>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/about-meditation.jpg" 
            alt="Relaxing meditation" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
