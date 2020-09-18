import React from 'react';

import styles from './Demo6.less';

function Demo5() {
  return (
    <div className={styles.demo}>
      <div className="father">
        <div className="float">
          <img
            src="https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/undraw_static_assets_rpm6.svg"
            alt="img"
          />
        </div>
        我是帅哥，好巧啊，我也是帅哥，原来看这本书的人都是帅哥~
      </div>
      <div>虽然你很帅，但是我对你不感兴趣。</div>
    </div>
  );
}

export default Demo5;
