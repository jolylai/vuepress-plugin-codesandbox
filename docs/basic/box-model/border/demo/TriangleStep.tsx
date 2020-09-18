import React from 'react';
import classnames from 'classnames';
import styles from './TriangleStep.less';

function TriangleStep() {
  return (
    <ul className={styles['list']}>
      <li className={classnames(styles['list-item'], styles['step1'])}></li>
      <li className={classnames(styles['list-item'], styles['step2'])}></li>
      <li className={classnames(styles['list-item'], styles['step3'])}></li>
      <li className={classnames(styles['list-item'], styles['step4'])}></li>
    </ul>
  );
}

export default TriangleStep;
