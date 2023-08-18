import styles from '../style';
import {team, arrowDown } from '../assets';

const About2 = () => (
  <section className={`${styles.flexCenter} my-10`}>
    <div className={`${styles.flexCenter} mr-20 ml-10`}>
      <h1 className="flex-1 font-inter font-semibold ss:text-[36px] text-[36px] text-[#181818] ss:leading-[140%] leading-[140%]">
          Our Team
          <img src={arrowDown} alt="arrowDown" className="w-[36px] h-[36px] ml-2 mb-1 inline" />
          <div className="max-w-full flex flex-wrap justify-center py-4">
          <img src={team} className="max-w-full h-auto relative z-[5] ml-8 mr-8 mt-8" />
        </div>
      </h1>
    </div>
  </section>
);

export default About2