import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { img02 } from '../assets';

const Home3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('home');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <motion.div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 4, delay: 0.2 }}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-inter font-semibold ss:text-[44px] text-[44px] text-[#181818] ss:leading-[140%] leading-[140%]">
            Stay Protected <br className="sm:block hidden" />{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mr-3`}>
          Your company data stays private - we protect your data by insulating your confidential
          information and utilize data masking to shield you from external AI systems.
          <br />
          <br />
          With our solution, you tap into the most powerful tools available and never have to worry
          that your data falls into the wrong hands.
        </p>
      </motion.div>

      <motion.div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 4, delay: 0.2 }}
      >
        <img src={img02} alt="billing" className="max-w-[450px] h-auto relative z-[5] mr-10" />
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Home3;
