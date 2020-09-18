import React, { useState } from 'react';
import { Form, Select } from 'antd';
import classnames from 'classnames';

import styles from './Demo1.less';

function Demo1() {
  const [flexValue, setFlexValue] = useState();
  return (
    <>
      <Form layout="horizontal">
        <Form.Item label="flex">
          <Select
            defaultValue=""
            style={{ width: 200 }}
            onChange={value => setFlexValue(value)}
          >
            <Select.Option value="">默认</Select.Option>
            <Select.Option value="none">none</Select.Option>
            <Select.Option value="auto">auto</Select.Option>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="100px">100px</Select.Option>
            <Select.Option value="1 100px">1 100px</Select.Option>
            <Select.Option value="1 1">1 1</Select.Option>
            <Select.Option value="1 1 100px">1 1 100px</Select.Option>
          </Select>
        </Form.Item>
      </Form>
      <ul className={styles['box-set']}>
        <li
          key={1}
          style={{ flex: flexValue }}
          className={classnames(styles['box'], styles['box-alpha'])}
        >
          Box 1
        </li>
        <li
          key={2}
          style={{ flex: flexValue }}
          className={classnames(styles['box'], styles['box-beta'])}
        >
          Box 2
        </li>
        {/* <li
          key={3}
          style={{ flex: flexValue }}
          className={classnames(styles['box'], styles['box-pink'])}
        >
          Box 3
        </li>
        <li
          key={4}
          style={{ flex: flexValue }}
          className={classnames(styles['box'], styles['box-yellow'])}
        >
          Box 4
        </li> */}
      </ul>
    </>
  );
}

export default Demo1;
