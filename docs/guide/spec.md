---
title: 规范

group:
  title: 概览
  path: /guide
  order: 1
---

# 设计规范

> [Ant Design 设计规范](https://ant.design/docs/spec/introduce-cn)

[BootStrap CSS](https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap.css)

## 配色

### 茶白

```tsx | inline
import React from 'react';

export default () => (
  <div style={{ display: `flex` }}>
    <ul style={{ listStyle: `none`, flex: 1, padding: 0 }}>
      <li style={{ padding: `16px 8px 0 8px`, background: `#f2f8f0` }}>
        #f2f8f0
      </li>
      <li style={{ padding: `16px 8px 0 8px`, background: `#c9a873` }}>
        #c9a873
      </li>
      <li style={{ padding: `16px 8px 0 8px`, background: `#7198a3` }}>
        #7198a3
      </li>
    </ul>

    <ul style={{ listStyle: `none`, flex: 1 }}>
      <li style={{ padding: `16px 8px 0 8px`, background: `#f2f8f0` }}>
        #f2f8f0
      </li>
      <li style={{ padding: `16px 8px 0 8px`, background: `#c1a18a` }}>
        #c1a18a
      </li>
      <li
        style={{
          padding: `16px 8px 0 8px`,
          background: `#5f4331`,
          color: `white`,
        }}
      >
        #5f4331
      </li>
    </ul>

    <ul style={{ listStyle: `none`, flex: 1 }}>
      <li style={{ padding: `16px 8px 0 8px`, background: `#f2f8f0` }}>
        #f2f8f0
      </li>
      <li style={{ padding: `16px 8px 0 8px`, background: `#b26d7a` }}>
        #b26d7a
      </li>
      <li style={{ padding: `16px 8px 0 8px`, background: `#cea78d` }}>
        #cea78d
      </li>
    </ul>
  </div>
);
```

## 字体家族

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
```

## 单位

em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。

浏览器的默认字体都是 16px

|     | 2    | 4   | 6    | 8   | 10   | 12  | 14   | 16  |
| --- | ---- | --- | ---- | --- | ---- | --- | ---- | --- |
| 16  | .125 | .25 | .375 | .5  | .625 | .75 | .875 | 1   |
