import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">
            Mind Tranquility In Relaxing Meditation
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The human mind and its behaviors are highly complex and have a sophisticated conceptual process 
            which engages the brain to lead life through an unpredictable and uncertain journey. 
            The endless flow of thoughts, emotional delusions, and illusions in the mind exhaust both the brain 
            and the body. AURA offers a peaceful digital space to restore this balance.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Read More
          </button>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/meditation.jpg" 
            alt="Meditation" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
