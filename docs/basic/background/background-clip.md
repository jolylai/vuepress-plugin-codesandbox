---
title: background-clip
---

`background-attachment`决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。

## fixed

背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。

```jsx | inline
import React from 'react';
export default () => {
  const style = {
    height: 280,
    backgroundImage:
      'url(https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)',
  };
  return <div style={style}></div>;
};
```
