import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const MotionLink = motion(Link);


function NavBar() {
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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

  return (
    <div className='w-full h-30 top-0 right-0 left-0 z-50 bg-[#3E4227] flex items-center justify-between px-8'>
      
      {/* Logo with Image and Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex items-center space-x-2'>
          <img
            src="/images/logo.png"
            alt="AURA Logo"
            className="w-16 h-19 ml-10"
          />
          <span className='text-white text-3xl font-sans ml-6'>AURA</span>
        </div>
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

      {/* Login button with a hover effect and router link */}
      <MotionLink
  to="/login"
  className='bg-white text-[#3E4227] px-6 py-2 rounded-full font-semibold mr-7 inline-block text-center'
  whileHover={hoverEffect}
>
  Login
</MotionLink>
    </div>
  );
}

export default NavBar;
