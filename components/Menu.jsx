'use client';

import styles from '../styles';

const Menu = ({ handleNavbar, name, url }) => (
  <li className="flex text-left">
    <a onClick={handleNavbar} href={url} className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl md:text-4xl ease-in duration-300 hover:scale-110 hover:underline "> 
      &gt;{name}
    </a>
  </li>
);

export default Menu;
