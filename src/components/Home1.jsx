import React from "react";
import { motion } from "framer-motion";
import { clients } from "../constants";
import styles from "../style";

const Home1 = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`w-full`}>
      <motion.h1
        className="text-center font-poppins font-semibold mt-4 mb-0 text-[40px] text-[#181818] leading-[140%]"
        initial={{ opacity: 0, y: 20 }} // Initial position and opacity
        animate={{ opacity: 1, y: 0 }} // Animation while entering
        transition={{ duration: 1, delay: 0.2 }} // Animation duration and delay
      >
        Our Partnerships
      </motion.h1>
      <div
        className={`grid grid-cols-1 sm:grid-cols-4 gap-4 items-center justify-center py-4 ${styles.maxWidth}`}
      >
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            className="w-full p-2"
            initial={{ opacity: 0, y: 20 }} // Initial position and opacity
            animate={{ opacity: 1, y: 0 }} // Animation while entering
            transition={{ duration: 1, delay: 0.5 + index * 0.5 }} // Animation duration and delay
          >
            <img
              src={client.logo}
              alt={client.name}
              className={`mx-auto object-contain ${styles.responsiveImage}`}
              style={{ maxWidth: "200px" }} // Adjust this value
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Home1;
