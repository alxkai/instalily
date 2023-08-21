import React from 'react';
import { arrowUp } from '../assets';
import { motion } from 'framer-motion';

const Button = ({ styles }) => {
  return (
    <a href="https://calendly.com/instalily/instalily-demo" target="_blank" rel="noopener noreferrer">
      <motion.button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[26px] text-primary outline-none ${styles}`}
        style={{
          backgroundColor: '#181818',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 60 60\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a2f9da\' fill-opacity=\'0.4\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M29 58.58l7.38-7.39A30.95 30.95 0 0 1 29 37.84a30.95 30.95 0 0 1-7.38 13.36l7.37 7.38zm1.4 1.41l.01.01h-2.84l-7.37-7.38A30.95 30.95 0 0 1 6.84 60H0v-1.02a28.9 28.9 0 0 0 18.79-7.78L0 32.41v-4.84L18.78 8.79A28.9 28.9 0 0 0 0 1.02V0h6.84a30.95 30.95 0 0 1 13.35 7.38L27.57 0h2.84l7.39 7.38A30.95 30.95 0 0 1 51.16 0H60v27.58-.01V60h-8.84a30.95 30.95 0 0 1-13.37-7.4L30.4 60zM29 1.41l-7.4 7.38A30.95 30.95 0 0 1 29 22.16 30.95 30.95 0 0 1 36.38 8.8L29 1.4zM58 1A28.9 28.9 0 0 0 39.2 8.8L58 27.58V1.02zm-20.2 9.2A28.9 28.9 0 0 0 30.02 29h26.56L37.8 10.21zM30.02 31a28.9 28.9 0 0 0 7.77 18.79l18.79-18.79H30.02zm9.18 20.2A28.9 28.9 0 0 0 58 59V32.4L39.2 51.19zm-19-1.4a28.9 28.9 0 0 0 7.78-18.8H1.41l18.8 18.8zm7.78-20.8A28.9 28.9 0 0 0 20.2 10.2L1.41 29h26.57z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          transition: 'background-color 0.3s, color 0.3s',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '4px solid #A2F9DA',
          color: '#F2F2F2',
          textDecoration: 'none',
          overflow: 'hidden', // Hide overflowing content
        }}
        whileHover={{
          borderRadius: '20px', // Adjust the value to control the transition
          color: '#A2F9DA', // Change the text color on hover
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Get <img src={arrowUp} alt="arrow" className="w-[28px] h-[28px] object-contain ml-2" />
        </div>
        <br />
        <span style={{ marginTop: '-45px' }}>Started</span>
      </motion.button>
    </a>
  );
};

export default Button;
