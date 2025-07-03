import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaPhoneAlt, FaUserMd, FaComments, FaUserCircle } from 'react-icons/fa';

const MotionLink = motion(Link);

function HomeNavBar() {
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

  // Nav items with icons and optional links
  const navItems = [
    { label: 'Fav', icon: <FaStar size={20} /> },
    { label: 'Council', icon: <FaUserMd size={20} />, to: '/counsellors' },
    { label: 'Chat', icon: <FaComments size={20} /> },
    { label: 'Contact', icon: <FaPhoneAlt size={20} /> }
  ];

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
        {navItems.map((item) => (
          item.to ? (
            <MotionLink
              key={item.label}
              to={item.to}
              className='flex items-center space-x-2 text-white text-lg font-medium'
              variants={navItemVariants}
              whileHover={hoverEffect}
            >
              {item.icon}
              <span>{item.label}</span>
            </MotionLink>
          ) : (
            <motion.li
              key={item.label}
              className='flex items-center space-x-2 text-white text-lg font-medium cursor-pointer'
              variants={navItemVariants}
              whileHover={hoverEffect}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.li>
          )
        ))}
      </motion.ul>

      {/* Profile icon link */}
      <MotionLink
        to="/myprofile"
        className='text-white mr-7'
        whileHover={hoverEffect}
      >
        <FaUserCircle size={32} />
      </MotionLink>
    </div>
  );
}

export default HomeNavBar;
