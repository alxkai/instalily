import styles from '../style';
import { arrowDown } from '../assets';

const Careers0 = () => (
  <section className={`${styles.flexCenter} my-10`}>
    <div className={`${styles.flexCenter} mr-20 ml-10`}>
      <h1 className="flex-1 font-inter font-semibold ss:text-[36px] text-[36px] text-[#181818] ss:leading-[140%] leading-[140%]">
          Careers
          <img src={arrowDown} alt="arrowDown" className="w-[36px] h-[36px] ml-2 mb-1 inline" />
          <p className={`${styles.paragraph} max-w-full mt-6 mb-5`}> 
           At Instalily, we are driven by a passion to revolutionize the adoption of AI and redefine the way businesses gain insights. If you are enthusiastic about our vision and eager to be part of a collaborative and driven team, we invite you to explore the exciting career opportunities at Instalily. Join us as we shape the future of AI-enabled solutions.
          </p>
      </h1>
    </div>
  </section>
)

export default Careers0
