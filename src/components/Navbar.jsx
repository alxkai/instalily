import React, { useState, useEffect } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import styles from '../style';
import Button1 from './Button1'; // Import the Button1 component

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update viewport width on window resize
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} className="w-[280px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mt-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-[#181818]`}
          >
            {/* Use the Link component */}
            <Link to={nav.id}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      {viewportWidth >= 1069 && (
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-2`}>
          <Button1 />
        </div>
      )}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-[#181818] absolute top-20 right-0 mx-4 my-2 mt-4 min-w-[300px] rounded-xl sidebar`}
          style={{ border: '1px solid #181818' }}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[20px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-[#f2f2f2]`}
              >
                {/* Use the Link component */}
                <Link to={nav.id}>{nav.title}</Link>
                <div
                  className="mt-1 h-[1px] w-full bg-[#f2f2f2]"
                ></div>
              </li>
            ))}
          </ul>
          {/* Use the Button component */}

        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
