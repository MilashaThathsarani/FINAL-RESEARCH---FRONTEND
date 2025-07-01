import React from 'react';
import { motion } from 'framer-motion';

function NavBar() {
  // Variants for the container to orchestrate staggered animations
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children by 0.2 seconds
      },
    },
  };

  // Variants for individual navigation items
  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  // Hover effect for interactive elements
  const hoverEffect = {
    scale: 1.1,
    transition: {
        type: 'spring',
        stiffness: 300,
    }
  }

  return (
    <div className='w-full h-28 top-0 right-0 left-0 z-50 bg-[#3E4227] flex items-center justify-between px-8'>
      {/* Logo with a simple fade-in and scale animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-white text-xl font-bold'>AURA</h1>
      </motion.div>

      {/* Nav Links with staggered animation */}
      <motion.ul 
        className='flex items-center space-x-8'
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {['Home', 'About', 'Features', 'Blog', 'Contact'].map((item) => (
          <motion.li 
            key={item} 
            className='text-white text-lg font-medium cursor-pointer'
            variants={navItemVariants}
            whileHover={hoverEffect}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      {/* Login button with a hover effect */}
      <motion.button 
        className='bg-white text-[#3E4227] px-6 py-2 rounded-full font-semibold'
        whileHover={hoverEffect}
      >
        Login
      </motion.button>
    </div>
  );
}

export default NavBar;