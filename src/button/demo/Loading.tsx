/**
 * title: 加载状态
 * desc: 添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
 */

import React from 'react';
import { Button } from 'chengyou';

function Loading() {
  return (
    <div>
      <Button loading>Loading</Button>
    </div>
  );
}

export default Loading;
