import React from 'react';
import classnames from 'classnames';
import styles from './Triangle.less';

function Triangle() {
  return (
    <ul className={styles['list']}>
      <li
        className={classnames(
          styles['list-item'],
          styles['triangle'],
          styles['triangle-down'],
        )}
      >
        Down
      </li>
      <li
        className={classnames(
          styles['list-item'],
          styles['triangle'],
          styles['triangle-up'],
        )}
      >
        Up
      </li>
      <li
        className={classnames(
          styles['list-item'],
          styles['triangle'],
          styles['triangle-left'],
        )}
      >
        Left
      </li>
      <li
        className={classnames(
          styles['list-item'],
          styles['triangle'],
          styles['triangle-right'],
        )}
      >
        Right
      </li>
    </ul>
  );
}

export default Triangle;
