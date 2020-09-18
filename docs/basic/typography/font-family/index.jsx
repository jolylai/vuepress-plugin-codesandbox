import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function index() {
  const controls = useAnimation({
    fontFamily:
      'font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  });

  return (
    <motion.div animate={controls}> I'm a sans-serif paragraph.</motion.div>
  );
}

export default index;
