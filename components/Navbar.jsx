'use client';

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { navVar } from '../utils/motion';
import { menuLinks } from '../constants';
import styles from '../styles';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('bg-transparent');
  const [padding, setPadding] = useState('py-8');

  const handleNavbar = () => { setNav(!nav); };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('glassmorphism-02 ease-in duration-200');
        setPadding('py-2');
      } else {
        setColor('transparent ease-in duration-200');
        setPadding('py-8');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <motion.nav
      variants={navVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.xPaddings} py-8 fixed z-50 w-full bg-opacity-5 ${color} ${padding}`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} flex mx-auto justify-between gap-8`}>
        {/* <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" /> */}
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          METAVERSUS
        </h2>

        <div className="cursor-pointer">
          <img onClick={handleNavbar} src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
        </div>

        <motion.div className={
          `absolute z-50 inset-0 w-full h-screen bg-black text-right ease-in duration-300 
          ${nav
            ? 'left-[0]'
            : 'left-[100%]'
          }`
        }
        >
          <div className="flex flex-col justify-center items-center w-[50%] h-screen m-auto">
            <button type="button" onClick={handleNavbar} className="self-start w-10 h-10 border-2 rounded-full transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-finger">x</button>

            <ul>
              {menuLinks.map((link, index) => (
                <li onClick={handleNavbar} key={index} className="p-4 text-purple-500 hover:text-pink-500 text-4xl ease-in duration-300">
                  <a href={link.url}> {link.name} </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
