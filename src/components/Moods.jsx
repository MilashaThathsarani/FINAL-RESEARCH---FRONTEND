import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const moods = [
  { name: 'Happy', color: 'bg-yellow-100', emoji: '😊' },
  { name: 'Sad', color: 'bg-blue-100', emoji: '😢' },
  { name: 'Angry', color: 'bg-red-100', emoji: '😠' },
  { name: 'Relaxed', color: 'bg-green-100', emoji: '🌿' },
  { name: 'In Love', color: 'bg-pink-100', emoji: '💖' },
  { name: 'Sleepy', color: 'bg-purple-100', emoji: '😴' },
  { name: 'Bored', color: 'bg-gray-100', emoji: '😐' },
  { name: 'Conflicted', color: 'bg-orange-100', emoji: '🤔' }
];

const tracks = [
  // ... your tracks array as before ...
];

function Moods() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white" id="tracks">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">
          Explore Our Healing Tracks
        </h2>
        <p className="text-green-900">
          Discover soothing sounds tailored for your mood.
        </p>
      </div>

      {/* Moods Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
        {moods.map((mood) => (
          <Link
            key={mood.name}
            to={`/mood/${mood.name.toLowerCase()}`}
            className={`flex flex-col items-center justify-center p-4 rounded-lg shadow hover:shadow-md transition text-center ${mood.color}`}
          >
            <span className="text-4xl mb-2">{mood.emoji}</span>
            <span className="text-lg font-medium text-[#3E4227]">{mood.name}</span>
          </Link>
        ))}
      </div>

      {/* Tracks Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition text-center h-full flex flex-col justify-between"
          >
            <img
              src={track.icon}
              alt={track.title}
              className="w-14 h-16 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-lg font-semibold text-black mb-2">{track.title}</h3>
            <p className="text-green-900 text-sm mb-4">{track.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-gray-600 text-sm">{track.duration}</span>
              <button
                aria-label={`Play ${track.title}`}
                className="bg-[#3E4227] hover:bg-green-800 text-white p-2 rounded-lg flex items-center justify-center transition"
              >
                <FaPlay size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Moods;
