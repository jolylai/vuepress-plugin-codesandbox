/**
 * title: 三种大小
 * desc: 我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。
 */

import React from 'react';
import { Input } from 'chengyou';

function Size() {
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Input size="small" placeholder="small size" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input placeholder="default size" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input size="large" placeholder="large size" />
      </div>
    </div>
  );
}

export default Size;
