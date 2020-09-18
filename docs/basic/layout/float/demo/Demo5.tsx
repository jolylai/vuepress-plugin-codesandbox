import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './Demo5.less';

function Demo5() {
  const [float, setFloat] = useState(false);

  const toggleFloat = () => {
    setFloat(float => !float);
  };

  return (
    <div>
      <a onClick={toggleFloat}>{float ? '去除浮动' : '设置浮动'}</a>
      <div className={styles['father']}>
        <img
          className={classnames({ [styles['float-left']]: float })}
          width={60}
          height={64}
          src="https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/undraw_static_assets_rpm6.svg"
          alt="img"
        />
      </div>
      <p className={styles['content']}>小猫 1，小猫 2，...</p>
    </div>
  );
}

export default Demo5;
