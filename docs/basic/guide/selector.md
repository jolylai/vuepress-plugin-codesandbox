---
title: 选择器
---

## 优先级

- !important
- 内联样式（1000）
- ID 选择器（0100）
- 类选择器/属性选择器/伪类选择器（0010）
- 元素选择器/伪元素选择器（0001）
- 关系选择器/通配符选择器（0000）

## 多元素的组合选择器

- `空格`：后代元素选择器，匹配所有属于 E 元素后代的 F 元素，E 和 F 之间用空格分隔

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
  color: #000;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 1.25rem;
  border-radius: 2px;
  margin-top: 2px;
  background: #05ffb0;
`;

export default () => (
  <Ul>
    <Li>
      <a>quam quidem dignissimos</a>
    </Li>
    <Li>
      <a>at ut magni</a>
    </Li>
  </Ul>
);
```

- `>`: 子元素选择器，匹配所有 E 元素的子元素 F
- `+` : 毗邻元素选择器，匹配所有紧随 E 元素之后的同级元素 F
- `~` : E ~ F 匹配任何在 E 元素之后的同级 F 元素
