import React, { useState } from 'react';
import styles from './Demo1.less';
import { Select, Form } from 'antd';

function Demo1() {
  const [backgroundClip, setBackgroundClip] = useState();
  return (
    <div>
      <Form layout="horizontal">
        <Form.Item label="background-clip">
          <Select
            defaultValue=""
            style={{ width: 200 }}
            onChange={value => setBackgroundClip(value)}
          >
            <Select.Option value="">默认</Select.Option>
            <Select.Option value="content-box">content-box</Select.Option>
            <Select.Option value="padding-box">padding-box</Select.Option>
            <Select.Option value="border-box">border-box</Select.Option>
          </Select>
        </Form.Item>
      </Form>

      <div className={styles.bg} style={{ backgroundClip }}>
        边框与背景
      </div>
    </div>
  );
}

export default Demo1;
