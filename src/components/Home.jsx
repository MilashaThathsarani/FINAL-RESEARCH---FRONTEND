import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function NavBar() {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Features', path: '/features' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 w-full flex items-center justify-between px-8 py-4 shadow backdrop-blur bg-white z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/images/logo.png"
          alt="AURA Logo"
          className="ml-7 w-12 h-14"
        />
        <span className="text-blue-900 text-2xl font-bold">AURA</span>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="text-blue-900 text-lg font-medium hover:text-green-700 transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <MotionLink
        to="/login"
        className="bg-blue-900 mr-7 text-md text-white px-4 py-2 rounded-lg font-semibold inline-block"
        whileHover={{ scale: 1.05 }}
      >
        Login
      </MotionLink>
    </div>
  );
}

function Home() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
      <NavBar />

      <main >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4 py-16 justify-between items-center ml-6">
          {/* LEFT: Text */}
          <div>
              <h2 className="font-semibold text-4xl text-blueGray-600 mt-9">
                Notus React - A beautiful extension for Tailwind CSS.
              </h2>
              <p className="mt-4 text-md leading-relaxed text-blueGray-500 mt-9">
                Notus React is Free and Open Source. It does not change any of
                the CSS from{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  Tailwind CSS
                </a>
                . It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
            {/* <Link
              to="/features"
              className="bg-green-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition inline-block"
            >
              Get Started
            </Link> */}
          </div>

          {/* RIGHT: Illustration / Pattern */}
          <div className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px">
            <img
              src="/images/pattern_react.png"
              alt="Meditation Illustration"
            />
          </div>
        </div>

        {/* BOTTOM ROW OF FEATURES */}
        <div className="bg-white py-13 mr-130">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
            {[
              { emoji: '🧘', title: 'Meditation', desc: 'Calming soundscapes and mindfulness guidance.' },
              { emoji: '🌿', title: 'Stress Relief', desc: 'Gentle sounds to reduce anxiety and promote calm.' },
              { emoji: '⚡', title: 'Boost Energy', desc: 'Music to lift your mood and energize your day.' },
              { emoji: '🎵', title: 'Mood-Based Tracks', desc: 'Personalized audio for your unique mood.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-blue-50 rounded-lg p-6 text-center shadow hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h4 className="font-semibold text-blue-950 mb-2">{item.title}</h4>
                <p className="text-blue-800 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
