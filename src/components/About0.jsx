import styles from '../style';
import { arrowDown, hero } from '../assets';

const About = () => (
  <section className={`${styles.flexCenter} my-10`}>
    <div className={`${styles.flexCenter} mr-20 ml-10`}>
      <h1 className="flex-1 font-inter font-semibold ss:text-[36px] text-[36px] text-[#181818] ss:leading-[140%] leading-[140%]">
          About Us
          <img src={arrowDown} alt="arrowDown" className="w-[36px] h-[36px] ml-2 mb-1 inline" />
          <p className={`${styles.paragraph} max-w-full mt-6 mb-5`}> 
          Welcome to Instalily.ai, where we are on a mission to transform the way enterprises leverage artificial intelligence to gain a competitive advantage. Our cutting-edge app is designed to provide businesses with an all-knowing, private AI action assistant, empowering them to unlock new possibilities and drive meaningful outcomes.
          <br /><br />
          With the power of advanced artificial intelligence and state-of-the-art generative language models, the Instalily.ai app offers a revolutionary chatbot that serves as the voice of your business. Seamlessly connect data, answer queries, and generate innovative ideas.
          </p>
      </h1>
    </div>
  </section>
);

export default About
