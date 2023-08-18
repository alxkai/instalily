import { arrowDown } from '../assets';
import styles from "../style"

const Careers1 = () => (
  <section className={`${styles.flexCenter} my-10`}>
    <div className={`${styles.flexCenter} mr-20 ml-10`}>
      <h1 className="flex-1 font-inter font-semibold ss:text-[36px] text-[36px] text-[#181818] ss:leading-[140%] leading-[140%]">
          Why Join Instalily?
          <img src={arrowDown} alt="arrowDown" className="w-[36px] h-[36px] ml-2 mb-1 inline" />
          <p className={`${styles.paragraph} max-w-full mt-6 mb-5`}> 
          <ul className={`${styles.paragraph} max-w-full mt-6 mb-5 list-disc pl-6 ml-10`}>
            <li>Make an Impact: Join us in shaping the future of AI products. Work with cross-functional teams to integrate AI technologies, drive advancements in the field, and make a tangible impact.</li>
            <li>Work with Top Talent: Collaborate with a diverse team of industry veterans from top-tier institutions who are dedicated to building groundbreaking solutions.</li>
            <li>Grow and Learn: Benefit from a culture that values continuous learning, fostering personal and professional growth through mentorship, training, and development opportunities.</li>
            <li>Innovate and Create: Work on cutting-edge projects that challenge the status quo and push the boundaries of what's possible with AI.</li>
            <li>Enjoy a Supportive Environment: Experience a workplace culture that prioritizes work-life balance, inclusivity, and a strong sense of community.</li>
          </ul>
         </p>
      </h1>
    </div>
  </section>
);

export default Careers1