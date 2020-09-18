import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Icon = ({ style = {} }) => (
  <svg
    style={style}
    class="bd-placeholder-img mr-3"
    width="64"
    height="64"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
    role="img"
    aria-label="Placeholder: 64x64"
  >
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
      64x64
    </text>
  </svg>
);

function index() {
  const mediaControl = useAnimation();
  const meidaBodyControl = useAnimation();
  const iconControl = useAnimation();

  const animation = async () => {
    await mediaControl.start({
      display: 'flex',
      transition: { duration: 1 },
    });
    await meidaBodyControl.start({
      flex: '1',
      transition: { duration: 1 },
    });
    await iconControl.start({
      alignSelf: 'center',
      transition: { duration: 1 },
    });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <motion.div animate={mediaControl}>
      <motion.span animate={iconControl}>
        <Icon style={{ marginRight: 8 }} />
      </motion.span>
      <motion.div animate={meidaBodyControl}>
        <h4>Media heading</h4>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
      </motion.div>
    </motion.div>
  );
}

export default index;
