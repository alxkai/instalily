import styles from '../style';
import { About0, About1, About2, CTA, Footer } from '../components';

const About = () => (
  <div className="bg-[#F2F2F2] w-full overflow-hidden">
      <div className={`bg-[#F2f2f2] ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818', 
      }}>
        <div className={`${styles.boxWidth}`}>
          <About0 />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818'}}>
        <div className={`${styles.boxWidth}`}>
          <About1 />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818' }}>
        <div className={`${styles.boxWidth}`}>
          <About2 />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818' }}>
        <div className={`${styles.boxWidth}`}>
          <CTA />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818' }}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
  </div>
);

export default About
