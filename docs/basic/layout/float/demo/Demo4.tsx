import React from 'react';
import styles from './Demo4.less';

function Demo4() {
  return (
    <div>
      <div className="box">
        <a className={styles['prev']}>&laquo; 上一章</a>
        <a className={styles['next']}>下一章 &raquo;</a>
        <h3 className={styles['title']}>第 112 章 动物环绕</h3>
      </div>
    </div>
  );
}

export default Demo4;
