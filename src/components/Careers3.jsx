import styles from '../style';
import { arrowDown } from '../assets';

const Home3 = () => (
  <section className={`${styles.flexCenter} my-10`}>
  <div className={`${styles.flexCenter} mr-20 ml-10`}>
    <h1 className="flex-1 font-inter font-semibold ss:text-[36px] text-[36px] text-[#181818] ss:leading-[140%] leading-[140%]">
        Current Openings
        <img src={arrowDown} alt="arrowDown" className="w-[36px] h-[36px] ml-2 mb-1 inline" />
        <p className={`${styles.paragraph} max-w-full mt-6 mb-5`}> 
        We are always on the lookout for talented individuals to join our team in various roles, including:
        <ul className={`${styles.paragraph} max-w-full mt-6 mb-5 list-disc pl-6 ml-10`}>
         <li>Software Engineers (Frontend, Backend, Full Stack)</li>
            <li>AI and Machine Learning Engineers</li>
            <li>Data Scientists</li>
            <li>Product Managers</li>
            <li>UX/UI Designers</li>
            <li>Sales and Business Development</li>
            <li>Marketing and Communications</li>
            <li>Customer Success and Support</li>
            <li>Operations and Finance</li>        
        </ul>
      </p>
    </h1>
  </div>
  </section>
);

export default Home3
