/**
 * title: 按钮尺寸
 * desc: 按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
 */

import React from 'react';
import { Button } from 'chengyou';

function Size() {
  return (
    <div>
      <Button size="small">Small</Button>
      <Button>Default</Button>
      <Button size="large">Large</Button>
    </div>
  );
}

export default Size;
