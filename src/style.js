const styles = {
  boxWidth: "xl:max-w-[1040px] sm:max-w-[1040px] w-full",
  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-[#181818] xs:leading-[140%] leading-[140%] w-full",
  paragraph: "font-inter font-normal text-[#181818] text-[20px] leading-[160%]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-10 py-6",
  padding: "sm:px-16 px-6 sm:py-8 py-4",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  stickyNav: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#f2f2f2', // Set your desired background color
    zIndex: 100, // Adjust the z-index if necessary
  },
  responsiveImage: {
    maxWidth: '80px', // Adjust as needed
    height: 'auto', // Maintain aspect ratio
  },
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
