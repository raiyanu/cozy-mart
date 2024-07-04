import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Animator = ({ children , type }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  if (type === 'marginLeft') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50, marginLeft: 100}}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50,marginLeft: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }
  if (type === 'scale') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50, scale: .5}}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{width:"inherit"}}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Animator;
