import React from 'react';
import { motion } from 'framer-motion';
import { arrowUp } from '../assets';

const Button1 = ({ styles }) => {
  return (
    <a href="https://calendly.com/instalily/instalily-demo" target="_blank" rel="noopener noreferrer">
      <motion.button
        type="button"
        className={`py-2 px-4 font-poppins font-medium text-[16px] text-primary outline-none ${styles}`}
        style={{
          backgroundColor: '#181818',
          backgroundRepeat: 'repeat',
          transition: 'background-color 0.3s, color 0.3s, border-radius 0.3s', // Added border-radius transition
          width: '150px',
          height: '36px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          color: '#F2F2F2',
          textDecoration: 'none',
          overflow: 'hidden', // Hide overflowing content
          marginTop: '5px',
        }}
        whileHover={{
          backgroundColor: '#A2F9DA', // Change the background color on hover
          color: '#181818', // Change the text color on hover
          borderRadius: '0', // Change the border radius on hover
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center'}}>
          Get Started
         
        </div>
      </motion.button>
    </a>
  );
};

export default Button1;
