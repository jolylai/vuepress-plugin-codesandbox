---
title: background-attachment
---

`background-attachment`决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。

## fixed

背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。

```jsx | inline
import React from 'react';
export default () => {
  const style = {
    overflow: 'auto',
    height: 280,
    backgroundAttachment: 'fixed',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)',
  };
  return (
    <div style={style}>
      <div style={{ height: 400 }} />
    </div>
  );
};
```

## scroll

背景相对于元素本身固定， 而不是随着它的内容滚动（对元素边框是有效的）。

```jsx | inline
import React from 'react';
export default () => {
  const style = {
    overflow: 'auto',
    height: 280,
    backgroundAttachment: 'scroll',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)',
  };
  return (
    <div style={style}>
      <div style={{ height: 400 }} />
    </div>
  );
};
```

## local

背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动， 并且背景的绘制区域和定位区域是相对于可滚动的区域而不是包含他们的边框。

```jsx | inline
import React from 'react';
export default () => {
  const style = {
    overflow: 'auto',
    height: 280,
    backgroundAttachment: 'local',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)',
  };
  return (
    <div style={style}>
      <div style={{ height: 400 }} />
    </div>
  );
};
```
