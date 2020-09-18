import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Float() {
  const controls = useAnimation({});
  const paragraphControl = useAnimation({});

  useEffect(() => {
    controls.start({
      float: 'right',
      lineHeight: 2,
      transition: { duration: 1, delay: 1 },
    });
    paragraphControl.start({
      color: 'skyblue',
      transition: { duration: 1, delay: 2 },
    });
  }, []);

  return (
    <motion.div style={{ background: '#edf2f8', padding: 16 }}>
      <motion.img
        animate={controls}
        width="128"
        src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      />
      <motion.p animate={paragraphControl}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis
        et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis
        ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit
        amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur
        ante. Cras convallis risus vel vehicula dapibus. Donec eget neque
        fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est,
        et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere,
        vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum
        fringilla. Donec varius vehicula magna sit amet auctor. Ut congue
        vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec
        sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur
        odio eu, finibus justo. Etiam eu vehicula felis.
      </motion.p>
    </motion.div>
  );
}

export default Float;
