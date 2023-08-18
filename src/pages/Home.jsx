import styles from '../style';

import { Home0, Home1, CTA, Home2, Home3, Footer } from '../components';

const Home = () => (
  <div className="bg-[#F2F2F2] w-full overflow-hidden">
      <div className={`bg-[#F2f2f2] ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818', 
      }}>
        <div className={`${styles.boxWidth}`}>
          <Home0 />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818'}}>
        <div className={`${styles.boxWidth}`}>
          <Home1 />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818' }}>
        <div className={`${styles.boxWidth}`}>
          <CTA />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818' }}>
        <div className={`${styles.boxWidth}`}>
          <Home2 />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818' }}>
        <div className={`${styles.boxWidth}`}>
          <Home3 />
        </div>
      </div>
      <div className={`bg-[#F2f2f2]] ${styles.paddingX} ${styles.flexStart}`} style={{ borderBottom: '1px solid #181818' }}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
  </div>
);

export default Home
