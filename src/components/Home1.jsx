import { clients } from "../constants"
import styles from "../style"

const Home1 = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>

      <h1 className="flex-1 text-center font-poppins font-semibold mt-[16px] mb-[0px] ss:text-[32px] text-[32px] text-[#181818] ss:leading-[140%] leading-[140%]">
        Our Partnerships{" "}
      </h1>
      <div className="w-full flex flex-wrap justify-center py-4"> 
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120ox]`}>
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Home1