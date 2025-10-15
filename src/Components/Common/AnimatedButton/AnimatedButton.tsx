'use client';
import React, { useState } from 'react';
import { IoIosArrowRoundDown } from "react-icons/io";
import PropTypes from 'prop-types';

const AnimatedButton = ({ label = 'Scroll to explore', icon = <IoIosArrowRoundDown size={24} />, className = '',  onClick = () => {} }) => {
  const [hovered, setHovered] = useState(false);
  const [leave, setLeave] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setLeave(false);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setLeave(true);
    setTimeout(() => setLeave(false), 500);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden border border-black px-10 py-5 rounded-full text-sm flex items-center gap-2 transition-colors duration-500 
        ${hovered ? 'text-white' : 'text-black'}
        ${hovered ? 'button-bg-hover' : ''} 
        ${leave ? 'button-bg-leave' : ''}
        ${className}`}
        onClick={onClick}
    >
      <span className="relative z-10">{label}</span>
      <span className="relative z-10">{icon}</span>
    </button>
  );
};

AnimatedButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  onclick: PropTypes.func,
};

export default AnimatedButton;
