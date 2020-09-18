import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
function index() {
  const ulControl = useAnimation({});
  const liControl = useAnimation({});

  const resizeContainer = async () => {
    //   去除默认里诶博爱样式
    await ulControl.start({
      listStyle: 'none',
      paddingLeft: '0px',
      marginBottom: '0px',
      borderRadius: '4px',
      transition: { duration: 1 },
    });
    // 内边距
    await liControl.start(i => ({
      paddingTop: '12px',
      paddingRight: '20px',
      paddingBottom: '12px',
      paddingLeft: '20px',
      transition: { duration: 1 },
    }));
    // 边框
    await liControl.start(i => ({
      border: '1px solid rgba(0,0,0,.125)',
      transition: { duration: 1 },
    }));

    // 去除多余边框
    await liControl.start(i => {
      const option = {
        borderTop: '0px solid rgba(0,0,0,.125)',
        transition: { duration: 1 },
      };
      return i > 0 ? option : {};
    });

    // 首尾边框圆角
    await liControl.start(i => {
      if (i === 0) {
        const firstItemOption = {
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
          transition: { duration: 1 },
        };
        return firstItemOption;
      }
      if (i === 4) {
        const firstItemOption = {
          borderBottomLeftRadius: 'inherit',
          borderBottomRightRadius: 'inherit',
          transition: { duration: 1 },
        };
        return firstItemOption;
      }
      return {};
    });

    // active
    await liControl.start(i => {
      if (i === 0) {
        const firstItemOption = {
          color: '#fff',
          borderColor: '#007bff',
          backgroundColor: '#007bff',

          transition: { duration: 1 },
        };
        return firstItemOption;
      }
      return {};
    });
  };

  useEffect(() => {
    resizeContainer();
  }, []);

  return (
    <motion.ul animate={ulControl}>
      <motion.li custom={0} animate={liControl}>
        Cras justo odio
      </motion.li>
      <motion.li custom={1} animate={liControl}>
        Dapibus ac facilisis in
      </motion.li>
      <motion.li custom={2} animate={liControl}>
        Morbi leo risus
      </motion.li>
      <motion.li custom={3} animate={liControl}>
        Porta ac consectetur ac
      </motion.li>
      <motion.li custom={4} animate={liControl}>
        Vestibulum at eros
      </motion.li>
    </motion.ul>
  );
}

export default index;
