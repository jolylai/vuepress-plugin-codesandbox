import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from './GridMenu.css';

const WifiIcon = () => (
  <svg
    t="1598517007455"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="35130"
    width="64"
    height="64"
  >
    <path
      d="M815.248 430.08a36.688 36.688 0 0 1-7.76-16.928l-5.072 5.488 2.928 2.72 0.096 0.096 9.808 8.624z m-591.6-31.584l285.216 315.328 282.32-304.56c-166.096-136.4-403.168-140.512-567.536-10.768z m-9.44 7.52l1.44-1.536c-1.936 2-2.048 2.128-3.76 3.632l0.4-0.32 1.92-1.76zM815.04 430.24c-2.56-2.576-2.56-2.576-4.432-4.88l2.064 2.656c0.8 0.736 1.6 1.472 2.368 2.224z m-634.688-58.272a1.744 1.744 0 0 1 0.16-0.16c186.592-158.4 465.888-154.128 654.48 11.696l0.064-0.064 2.944 2.72c3.328 2.992 6.64 6.016 9.92 9.12a5.6 5.6 0 0 1 0.592 0.64l2.88 2.656a11.136 11.136 0 0 1 0.592 15.728L512.56 780.448a5.568 5.568 0 0 1-8.208-0.064L162.88 402.88a11.136 11.136 0 0 1 0.752-15.696l16.704-15.216z"
      p-id="35131"
    ></path>
  </svg>
);

const MusicIcon = () => (
  <svg
    t="1598517057880"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="35275"
    width="64"
    height="64"
  >
    <path
      d="M768.496 359.12L648.224 572a128 128 0 1 1-1.648-92.288l90.784-160.656A295.2 295.2 0 0 0 520 224C356.512 224 224 356.512 224 520S356.512 816 520 816C683.472 816 816 683.472 816 520c0-59.328-17.44-114.56-47.504-160.88zM600.272 562.352l-0.272-0.144 1.648-2.912a80 80 0 1 0-1.376 3.072zM864 520C864 709.984 709.984 864 520 864S176 709.984 176 520 330.016 176 520 176 864 330.016 864 520z"
      p-id="35276"
    ></path>
  </svg>
);

function GridMenu() {
  const containerControl = useAnimation({});

  const resizeContainer = async () => {
    await containerControl.start({
      width: 800,
      transition: { duration: 2, delay: 1 },
    });
    await containerControl.start({
      width: 400,
      transition: { duration: 2 },
    });
    resizeContainer();
  };

  useEffect(() => {
    resizeContainer();
  }, []);

  return (
    <motion.div className={styles.menu} animate={containerControl}>
      <a>
        <MusicIcon />
        <p>音乐</p>
      </a>
      <a>
        <MusicIcon />
        <p>音乐</p>
      </a>
      <a>
        <MusicIcon />
        <p>音乐</p>
      </a>
      <a>
        <WifiIcon />
        <p>音乐</p>
      </a>
      <a>
        <WifiIcon />
        <p>音乐</p>
      </a>
      <a>
        <WifiIcon />
        <p>音乐</p>
      </a>
    </motion.div>
  );
}

export default GridMenu;
