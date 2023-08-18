import styles from '../style';
import { how, arrowDown, hero } from '../assets';

const Home4 = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
   <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
     <div className="flex flex-row mb-3.5 justify-between items-center w-full">
       <h1 className="flex-1 font-inter font-semibold ss:text-[32px] text-[32px] text-[#181818] ss:leading-[140%] leading-[140%]">
          How It Works
          <img src={arrowDown} alt="arrowDown" className="w-[28px] h-[28px] ml-2 mb-1 inline" />
        </h1>
    </div>
     <div className="flex flex-row justify-between items-center w-full">
       <h1 className="flex-1 font-inter font-semibold ss:text-[65px] text-[65px] text-[#181818] ss:leading-[125%] leading-[125%]">
         <span className="text-gradient" >Take Action to</span> {" "}
         <em className="font-bold">Turbocharge</em> {" "}
         <span className="text-gradient" >Growth.</span> {" "}
       </h1>
     </div>
     <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-4`}> Instalily provides you with a personalized AI Agent that saves you both time and money - automate tasks and increase your output 3-4x.</p>
   </div>

   <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
     <img src={how} alt="billing" className="max-w-[450px] h-auto relative z-[5] mr-10" />
   </div>

   <div className={`ss:hidden ${styles.flexCenter}`}>

   </div>
  </section>
)

export default Home4