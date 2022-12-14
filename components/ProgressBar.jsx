'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(
    scrollYProgress,
    { stiffness: 100, damping: 30, restDelta: 0.001 },
  );

  return (
    <motion.div className="blur-[1px] progress-bar bg-gradient-to-r from-purple-500 to-pink-500" style={{ scaleX }} />
  );
};

export default ProgressBar;
