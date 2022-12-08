'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { navVar } from '../utils/motion';
import { menuLinks } from '../constants';

import styles from '../styles';

const Menu = ({ handleNavbar }) => (
  <motion.div
    variants={navVar}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <ul>
      {menuLinks.map((link, index) => (
        <li onClick={handleNavbar} key={index} className="p-4 hover:text-gray-500 text-4xl">
          <Link href={link.url}> {link.name} </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Menu;
