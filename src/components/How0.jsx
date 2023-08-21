import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { how, arrowDown } from '../assets';

const How0 = () => (
  <motion.section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-row mb-3.5 justify-between items-center w-full"
      >
        <h1 className="flex-1 font-inter font-semibold ss:text-[32px] text-[32px] text-[#181818] ss:leading-[140%] leading-[140%]">
          How It Works
          <img src={arrowDown} alt="arrowDown" className="w-[28px] h-[28px] ml-2 mb-1 inline" />
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-row justify-between items-center w-full"
      >
        <h1 className="flex-1 font-inter font-semibold ss:text-[65px] text-[65px] text-[#181818] ss:leading-[125%] leading-[125%]">
          <span className="text-gradient">Take Action to</span> {" "}
          <em className="font-bold">Turbocharge</em> {" "}
          <span className="text-gradient">Growth.</span> {" "}
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className={`${styles.paragraph} max-w-[470px] mt-5 mb-4`}
      >
        Instalily provides you with a personalized AI Agent that saves you both time and money - automate tasks and increase your output 3-4x.
      </motion.p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <motion.img
        src={how}
        alt="billing"
        className="max-w-[450px] h-auto relative z-[5] mr-10"
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      {/* Other content */}
    </div>
  </motion.section>
);

export default How0;
