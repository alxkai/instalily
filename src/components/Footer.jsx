import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import Form0 from './Form0';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 mt-[-20px] w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-0">
        <img 
          src={logo}
          className="w-[266px] h-[72px] object-contain"
        />
        <p className="font-poppins text-[14px] leading-[27px] text-[#181818]" style={{ marginLeft: '48px' }}>
          433 Broadway Suite 207
          <br />New York, NY 10013 
          <br /><a href="mailto:hello@instalily.ai" className="hover:underline">hello@instalily.ai</a>
        </p>
      </div>

      <div className={`bg-[#F2f2f2]] mt-[20px] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Form0 />
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-8 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-[#181818] mt-5">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name}
                  className={`font-inter font-normal text-[16px] leading-[24px] text-[#181818] hover:underline cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}
                >
                  {/* Use an absolute path */}
                  <Link to={`/${link.link}`} className="hover:underline">{link.name}</Link>
                </li> 
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-[#18118]]">
        © 2023 Instalily. All Rights Reserved
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {/* 
        {socialMedia.map((social, index) => (
          <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0' }`}
          />
        )
        )}
        */}
      </div>
    </div>
  </section>
);

export default Footer;
