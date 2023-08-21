import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { img01 } from '../assets';

const Home2 = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= window.innerHeight) {
      setIsVisible(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slideInVariants = {
    hidden: { opacity: 0, x: 1000 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <motion.img
          src={img01}
          alt="billing"
          className={`max-w-[450px] h-auto relative z-[5] ml-8 mr-8 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ opacity: 0, y: 1000 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1
            className="flex-1 font-inter font-semibold ss:text-[44px] text-[44px] text-[#181818] ss:leading-[140%] leading-[140%]"
            variants={slideInVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 1 }} // Slower animation
          >
            Automate manual tasks and increase output by{" "}
            <span className="text-gradient">3-4x.</span>{" "}
          </motion.h1>
        </div>
        <motion.p
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          variants={slideInVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 1 }} // Slower animation
        >
          See the bigger picture with marketing analytics driven from your data
          while leveraging global resources. Think smarter and faster with our
          proprietary AI switch that picks the best-fitted model for the task.
        </motion.p>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Home2;
