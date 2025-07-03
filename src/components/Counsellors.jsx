import React from 'react';
import { FaPlay } from 'react-icons/fa';

const counsellors = [
  {
    title: 'Healing Waves',
    description: 'Calm your mind with gentle ocean sounds.fgvuydfgevuiesyyyyyyyyyyyytrhbryyyyyythtyty',
    mobile:'0769069384',
    icon: '/images/logo.png',
  },
  {
    title: 'Deep Relax',
    description: 'Soft pads and serene textures.',
    icon: '/images/logo.png',
  },
  {
    title: 'Chillout Lounge',
    description: 'Laid-back beats for stress relief.',
    icon: '/images/logo.png',
  },
  {
    title: 'Focus Flow',
    description: 'Ambient sounds to boost concentration.',
    icon: '/images/logo.png',
  },
  {
    title: 'Mindful Calm',
    description: 'Meditative soundscape for inner peace.',
    icon: '/images/logo.png',
  },
   {
    title: 'Healing Waves',
    description: 'Calm your mind with gentle ocean sounds.',
    icon: '/images/logo.png',
  },
  {
    title: 'Deep Relax',
    description: 'Soft pads and serene textures.',
    icon: '/images/logo.png',
  },
  {
    title: 'Chillout Lounge',
    description: 'Laid-back beats for stress relief.',
    icon: '/images/logo.png',
  },
  {
    title: 'Focus Flow',
    description: 'Ambient sounds to boost concentration.',
    icon: '/images/logo.png',
  },
  {
    title: 'Mindful Calm',
    description: 'Meditative soundscape for inner peace.',
    icon: '/images/logo.png',
  },
   {
    title: 'Healing Waves',
    description: 'Calm your mind with gentle ocean sounds.',
    icon: '/images/logo.png',
  },
  {
    title: 'Deep Relax',
    description: 'Soft pads and serene textures.',
    icon: '/images/logo.png',
  },
  {
    title: 'Chillout Lounge',
    description: 'Laid-back beats for stress relief.',
    icon: '/images/logo.png',
  },
  {
    title: 'Focus Flow',
    description: 'Ambient sounds to boost concentration.',
    icon: '/images/logo.png',
  },
  {
    title: 'Mindful Calm',
    description: 'Meditative soundscape for inner peace.',
    icon: '/images/logo.png',
  },
  // ... rest of your tracks ...
];

function Counsellors() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white" id="counsellors">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">
          Councellors
        </h2>
        <p className="text-green-900">
          Discover soothing sounds tailored for your mood.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6">
        {counsellors.map((track, index) => (
          <div
            key={index}
            className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition text-center h-full flex flex-col justify-between"
          >
            <img
              src={track.icon}
              alt={track.title}
              className="w-20 h-22 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-lg font-semibold text-black mb-2">{track.title}</h3>
            <p className="text-green-900 text-sm mb-4">{track.description}</p>
            <p className="text-green-900 text-sm mb-4">{track.mobile}</p>


            <div className="flex items-center justify-between mt-auto">
              <span className="text-gray-600 text-sm">{track.duration}</span>
              {/* <button
                aria-label={`Play ${track.title}`}
                className="bg-[#3E4227] hover:bg-green-800 text-white p-2 rounded-lg flex items-center justify-center transition"
              >
                <FaPlay size={16} />
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Counsellors;
