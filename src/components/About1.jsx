import { arrowDown } from '../assets';
import styles from "../style"

const About1 = () => (
  <section className={`${styles.flexCenter} my-10`}>
    <div className={`${styles.flexCenter} mr-20 ml-10`}>
      <h1 className="flex-1 font-inter font-semibold ss:text-[36px] text-[36px] text-[#181818] ss:leading-[140%] leading-[140%]">
          Our Mission
          <img src={arrowDown} alt="arrowDown" className="w-[36px] h-[36px] ml-2 mb-1 inline" />
          <p className={`${styles.paragraph} max-w-full mt-6 mb-5`}> 
          At Instalily, we believe in empowering enterprises to create a competitive edge through AI. Our app enables you to effortlessly address any question and harness the full potential of artificial intelligence to propel your business forward.
          <ul className={`${styles.paragraph} max-w-full mt-6 mb-5 list-disc pl-6 ml-10`}>
            <li>Enterprise Adoption: Instalily.ai is at the forefront of the foundational change in the state of enterprise adoption. We offer a foundationally different perspective on the future of AI-powered solutions, not just focused on reasoning but also enabling businesses to drive actionable outcomes.</li>
            <li>Intelligent Action Assistant: Our app combines the power of globalized reasoning and localized data, leveraging both proprietary and open-source models. The result is an intelligent action assistant that not only provides insights and guides you towards informed decisions but carries out user-guided actions.</li>
            <li>Instalily Decisioning System: We have developed a sophisticated decisioning system that optimizes several factors, including the cost of the model, required output fidelity, potential for hallucination, and the balance between reasoning and action. This ensures that your business LLM will be tailored to your unique needs.</li>
          </ul>          
          Join us on this transformative journey as we redefine the future of AI-powered business solutions. With Instalily.ai, you can unleash the true potential of artificial intelligence, propelling your enterprise towards success in an ever-evolving landscape. Experience a new era of AI-enabled growth.
          </p>
      </h1>
    </div>
  </section>
);

export default About1