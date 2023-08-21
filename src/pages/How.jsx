import styles from '../style';
import { How0, CTA, Footer } from '../components';

const How = () => (
  <div className="bg-[#F2F2F2] w-full overflow-hidden">
      <div className={`bg-[#F2f2f2] ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818', 
      }}>
        <div className={`${styles.boxWidth}`}>
          <How0 />
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

export default How;
