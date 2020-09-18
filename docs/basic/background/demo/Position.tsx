import React, { useState } from 'react';

import styles from './Position.less';
import { Select } from 'antd';

function Position() {
  const [value, setValue] = useState();
  const handleChange = (value: string) => {
    console.log('value: ', value);
    setValue(value);
  };

  return (
    <ul className={styles.position}>
      <Select style={{ width: 200 }} onChange={handleChange}>
        <Select.OptGroup label="关键字">
          <Select.Option value="center">center</Select.Option>
          <Select.Option value="top">top</Select.Option>
          <Select.Option value="right">right</Select.Option>
          <Select.Option value="bottom">bottom</Select.Option>
          <Select.Option value="left">left</Select.Option>
        </Select.OptGroup>
        <Select.OptGroup label="百分比值">
          <Select.Option value="25% 75%"> 25% 75%</Select.Option>
        </Select.OptGroup>
      </Select>
      <li style={{ backgroundPosition: value }}></li>
    </ul>
  );
}

export default Position;
