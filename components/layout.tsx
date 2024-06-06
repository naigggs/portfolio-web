'use client'

import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: '100vh',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: '-100vh',
    transition: {
      duration: 0.5,
    },
  },
};

const Layout = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Layout
