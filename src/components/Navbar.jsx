import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// MotionLink for animation
const MotionLink = motion(Link);

// The NavBar component (INSIDE Home.jsx)
function NavBar() {
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const hoverEffect = {
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Features', path: '/features' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="w-full fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-8 py-4 shadow-lg backdrop-blur-md border-b border-emerald-900">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="AURA Logo"
            className="w-16 h-20 ml-10"
          />
          <span className="text-[#3E4227] text-3xl font-sans ml-6">AURA</span>
        </Link>
      </motion.div>

      {/* Nav Links */}
      <motion.ul
        className="flex items-center space-x-8"
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item) => (
          <motion.li
            key={item.label}
            variants={navItemVariants}
            whileHover={hoverEffect}
          >
            <Link
              to={item.path}
              className="text-[#3E4227] text-lg font-bold hover:text-green-900 transition"
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Login Button */}
      <MotionLink
        to="/login"
        className="bg-[#3E4227] text-white px-6 py-2 rounded-full font-semibold mr-7 inline-block text-center"
        whileHover={hoverEffect}
      >
        Login
      </MotionLink>
    </div>
  );
}

// Main Home Page Content
function Home() {
  return (
    <div className="min-h-screen bg-[#b7c5b0]">
      
      {/* Include Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2e2e2e] leading-tight">
            Elevate Your <br /> Soul with <span className="italic text-white bg-[#3E4227] px-2 rounded">Aura</span>
          </h1>
          <p className="text-[#4a5a48] max-w-md">
            Meditation principles and calming audio are the building blocks of relaxation with Aura.
          </p>
          <Link
            to="/signup"
            className="bg-[#3E4227] text-white px-6 py-3 rounded-lg hover:bg-green-900 transition inline-block"
          >
            Get Started
          </Link>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center">
          <img
            src="/images/meditation-illustration.png"
            alt="Meditation Illustration"
            className="max-w-xs md:max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#b7c5b0] py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            {
              icon: '🧘',
              title: 'Meditation',
              desc: 'Calming soundscapes and mindfulness guidance.',
            },
            {
              icon: '🌿',
              title: 'Stress Relief',
              desc: 'Gentle sounds to reduce anxiety and promote calm.',
            },
            {
              icon: '⚡',
              title: 'Boost Energy',
              desc: 'Music to lift your mood and energize your day.',
            },
            {
              icon: '🎵',
              title: 'Mood-Based Tracks',
              desc: 'Personalized audio for your unique mood.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#dce3d6] rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold mb-2 text-[#3E4227]">{item.title}</h4>
              <p className="text-[#4a5a48] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
