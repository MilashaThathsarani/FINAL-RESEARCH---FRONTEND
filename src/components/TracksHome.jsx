import React from 'react';
import { FaPlay } from 'react-icons/fa';

const tracks = [
  {
    title: 'Healing Waves',
    description: 'Calm your mind with gentle ocean sounds.',
    icon: '/images/logo.png',
    duration: '5:12'
  },
  {
    title: 'Deep Relax',
    description: 'Soft pads and serene textures.',
    icon: '/images/logo.png',
    duration: '6:45'
  },
  {
    title: 'Chillout Lounge',
    description: 'Laid-back beats for stress relief.',
    icon: '/images/logo.png',
    duration: '4:30'
  },
  {
    title: 'Focus Flow',
    description: 'Ambient sounds to boost concentration.',
    icon: '/images/logo.png',
    duration: '7:10'
  },
  {
    title: 'Mindful Calm',
    description: 'Meditative soundscape for inner peace.',
    icon: '/images/logo.png',
    duration: '5:55'
  },
   {
    title: 'Healing Waves',
    description: 'Calm your mind with gentle ocean sounds.',
    icon: '/images/logo.png',
    duration: '5:12'
  },
  {
    title: 'Deep Relax',
    description: 'Soft pads and serene textures.',
    icon: '/images/logo.png',
    duration: '6:45'
  },
  {
    title: 'Chillout Lounge',
    description: 'Laid-back beats for stress relief.',
    icon: '/images/logo.png',
    duration: '4:30'
  },
  {
    title: 'Focus Flow',
    description: 'Ambient sounds to boost concentration.',
    icon: '/images/logo.png',
    duration: '7:10'
  },
  {
    title: 'Mindful Calm',
    description: 'Meditative soundscape for inner peace.',
    icon: '/images/logo.png',
    duration: '5:55'
  },
   {
    title: 'Healing Waves',
    description: 'Calm your mind with gentle ocean sounds.',
    icon: '/images/logo.png',
    duration: '5:12'
  },
  {
    title: 'Deep Relax',
    description: 'Soft pads and serene textures.',
    icon: '/images/logo.png',
    duration: '6:45'
  },
  {
    title: 'Chillout Lounge',
    description: 'Laid-back beats for stress relief.',
    icon: '/images/logo.png',
    duration: '4:30'
  },
  {
    title: 'Focus Flow',
    description: 'Ambient sounds to boost concentration.',
    icon: '/images/logo.png',
    duration: '7:10'
  },
  {
    title: 'Mindful Calm',
    description: 'Meditative soundscape for inner peace.',
    icon: '/images/logo.png',
    duration: '5:55'
  },
  // ... rest of your tracks ...
];

function TracksHome() {
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

export default TracksHome;
