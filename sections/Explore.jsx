'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExploreCard, TitleText, TypingText } from '../components';

import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';
import styles from '../styles';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section id="explore" className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col mx-auto`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText title={<>Choose the world you want <br className="md:block hidden" /> to explore. </>} textStyles="text-center" />

        <div className="flex lg:flex-row flex-col min-h-[70vh] gap-5 mt-[50px]">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Explore;
