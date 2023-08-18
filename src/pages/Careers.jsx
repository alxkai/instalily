import styles from '../style';
import { Careers0, Careers1, Careers2, Careers3, CTA, Footer } from '../components';

const Careers = () => (
  <div className="bg-[#F2F2F2] w-full overflow-hidden">
      <div className={`bg-[#F2f2f2] ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818', 
      }}>
        <div className={`${styles.boxWidth}`}>
          <Careers0 />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818'}}>
        <div className={`${styles.boxWidth}`}>
          <Careers1 />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818' }}>
        <div className={`${styles.boxWidth}`}>
          <Careers2 />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818' }}>
        <div className={`${styles.boxWidth}`}>
          <Careers3 />
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

export default Careers
