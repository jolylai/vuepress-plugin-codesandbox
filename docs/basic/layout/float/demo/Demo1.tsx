import React from 'react';
import styles from './Demo1.less';

function Demo1() {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles['float-left']}>
          <img
            src="https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/undraw_static_assets_rpm6.svg"
            alt="img"
          />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles['float-left']}>
          <img
            src="https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/undraw_static_assets_rpm6.svg"
            alt="img"
          />
          做前端的都是帅哥美女
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles['float-left']}>
          <img
            src="https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/undraw_static_assets_rpm6.svg"
            alt="img"
          />
          kdlkfajsdljfaldjflakdjflkajdlfjalsdjfkl这个浮动元素的宽度就不是 200px
        </div>
      </div>
    </div>
  );
}

export default Demo1;
