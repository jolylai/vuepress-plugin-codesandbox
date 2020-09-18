import React from 'react';
import styles from './Demo3.less';

function Demo3() {
  return (
    <div>
      <div className={styles['multiple-border']}>多重边框（外扩）</div>
      <div className={styles['multiple-border-insert']}>多重内边框（内嵌）</div>
    </div>
  );
}

export default Demo3;
