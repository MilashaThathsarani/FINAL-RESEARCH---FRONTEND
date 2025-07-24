import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16" id="join">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text & Form Side */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-4 border-l-4 border-blue-900 pl-3">
            Join with us
          </h2>
          <p className="text-gray-600 mb-6">
            Are you a talented music producer who creates soothing sounds and tranquil melodies? 
            Share your gift with our meditation community and let your music calm the soul.
            Submit your tracks, reach a wider audience, and connect with listeners who seek healing through music.
            We’ll respond within 2–3 days. Let's make a peaceful impact together.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
            <textarea
              placeholder="Enter message"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Side */}
        <div>
          <img
            src="/images/images.jfif"
            alt="Join Meditation"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
