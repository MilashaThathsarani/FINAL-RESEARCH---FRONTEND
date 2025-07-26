import React from 'react';

const tracks = [
  {
    id: 1,
    title: 'Tranquil Breeze',
    mood: 'Relaxed',
    description: 'Gentle music to calm your thoughts and unwind.',
  },
  {
    id: 2,
    title: 'Rainy Reflections',
    mood: 'Sad',
    description: 'Rain sounds and piano to soothe emotional stress.',
  },
  {
    id: 3,
    title: 'Joyful Rise',
    mood: 'Happy',
    description: 'Upbeat ambient music to start your day with positivity.',
  },
  {
    id: 4,
    title: 'Dreamscape',
    mood: 'Sleepy',
    description: 'Soft melodies to help you fall asleep peacefully.',
  },
];

function Tracks() {
  return (
    <section className="min-h-screen bg-white py-16 px-6 md:px-16" id="tracks">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Relaxing Tracks
        </h2>

        <div className="space-y-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-green-900">{track.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">Mood: {track.mood}</p>
                  <p className="text-gray-700 mt-2">{track.description}</p>
                </div>
                <button className="mt-4 md:mt-0 bg-blue-950 text-white px-5 py-2 rounded-lg hover:bg-green-900">
                  ▶ Play
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tracks;
