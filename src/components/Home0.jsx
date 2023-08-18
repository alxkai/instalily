import styles from '../style';
import { discount, hero } from '../assets';
import GetStarted from './GetStarted';

const Home0 = () => (
   <section id="home" className={`flex
   md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-inter font-semibold ss:text-[72px] text-[52px] text-[#181818] ss:leading-[100px] leading-[75px]">
        Your Next <br className="sm:block hidden" /> {" "}
        <span className="text-gradient" >Private AI</span> {" "}
        </h1>
      </div>

      <h1 className="font-inter mt-[20px] mb-[16px] font-semibold ss:text-[68px] text-[52px] text-[#181818] ss:leading-[70%] leading-[70%] w-full">Action Agent.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-4`}> We revolutionize marketing and e-commerce through an AI agent that automates tasks, makes data-driven decisions, reduces costs, and accelerates business growth.</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={hero} alt="billing" className="max-w-[450px] h-auto relative z-[5] mr-10" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>

    </div>
   </section>
)

export default Home0