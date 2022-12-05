'use client';

import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVar } from '../utils/motion';
import styles from '../styles';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
      className={`${styles.innerWidth} flex mx-auto flex-col`}
    >
      <div className="flex flex-col justify-center items-center relative z-10">

        {/* Title H1 */}
        <motion.h1 variants={textVar(1.1)} className={styles.heroHeading}> Metaverse </motion.h1>
        <motion.div
          variants={textVar(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
        {/* end Title H1 */}

      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] relative z-10"
        />
        <a href="#explore">
          <div className="relative z-10 flex justify-end w-full -mt-[50px] pr-[40px] sm:-mt-[70px]">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
