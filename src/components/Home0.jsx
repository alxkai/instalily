import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { hero } from '../assets';

const Home0 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Set to true when the component mounts
  }, []);

  const slideInVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 0.9 }} // Animation duration
      variants={slideInVariants}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-inter font-semibold ss:text-[72px] text-[52px] text-[#181818] ss:leading-[100px] leading-[75px]">
            Your Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Private AI</span>{" "}
          </h1>
        </div>

        <h1 className="font-inter mt-[20px] mb-[16px] font-semibold ss:text-[68px] text-[52px] text-[#181818] ss:leading-[70%] leading-[70%] w-full">
          Action Agent.
        </h1>
        <motion.p
          className={`${styles.paragraph} max-w-[470px] mt-5 mb-4`}
          initial={{ opacity: 0, y: 100 }} // Start hidden below
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 0 }} // Slide in and fade
          transition={{ duration: 0.5, delay: 1 }} // Start after a delay
        >
          We revolutionize marketing and e-commerce through an AI agent that automates tasks, makes data-driven decisions, reduces costs, and accelerates business growth.
        </motion.p>
      </div>
      

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <motion.img
          src={hero}
          className="max-w-[450px] h-auto relative z-[5] mr-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 0 }}
          transition={{ duration: 1, delay: 0.5 }} // Animation duration
        />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </motion.section>
  );
};

export default Home0;
