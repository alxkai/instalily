import styles from '../style';
import { img01 } from '../assets';
import GetStarted from './GetStarted';

const Home2 = () => (
   <section id="home" className={`flex
   md:flex-row flex-col ${styles.paddingY}`}>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={img01} alt="billing" className="max-w-[450px] h-auto relative z-[5] ml-8 mr-8" />
    </div>

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-inter font-semibold ss:text-[44px] text-[44px] text-[#181818] ss:leading-[140%] leading-[140%]">
        Automate manual tasks and increase output by <span className="text-gradient" >3-4x.</span>{" "}
        
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      See the bigger picture with marketing analytics driven from your data while leveraging global resources. Think smarter and faster with our proprietary AI switch that picks the best-fitted model for the task.
      </p>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>

    </div>
   </section>
)

export default Home2
