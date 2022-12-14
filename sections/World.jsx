'use client';

import { motion } from 'framer-motion';

import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import styles from '../styles';

const World = () => (
  <section id="people-on-the-world" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(<>Track friends around you and invite them to play together in the same world</>)}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="hidden lg:block absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] shadow-lg shadow-[#F6623E]/50 pinMap">
          <img src="people-01.png" alt="people" className="w-full relative top-2 blur-[10px]" />
          <img src="people-01.png" alt="people" className="w-full h-full relative -top-[3.60rem]" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] shadow-lg shadow-[#F29DB0]/50 pinMap">
          <img src="/people-02.png" alt="people" className="w-full h-full relative top-2 blur-[10px]" />
          <img src="/people-02.png" alt="people" className="w-full h-full relative -top-[3.60rem]" />
        </div>

        <div className="absolute top-10 right-[40%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] shadow-lg shadow-[#ADB6D7]/50 pinMap">
          <img src="people-03.png" alt="people" className="w-full h-full relative top-2 blur-[10px]" />
          <img src="people-03.png" alt="people" className="w-full h-full relative -top-[3.60rem]" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
