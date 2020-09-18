---
title: 色彩
---

## 品牌色

品牌色是体现产品特性和传播理念最直观的视觉元素之一。在色彩选取时，需要先明确品牌色在界面中的使用场景及范围。在基础色板中选择主色，我们建议选择色板从浅至深的第六个颜色作为主色。 Ant Design 的品牌色取自基础色板的蓝色，Hex 值为 #1890FF，应用场景包括：关键行动点，操作状态、重要信息高亮，图形化等场景。

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
  padding: 2rem;
  background-image: linear-gradient(to right, #fff 50%, #000 0);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 1.25rem;
  color: #f0f8ff;
  border-radius: 2px;
  margin-top: 2px;
`;

export default () => (
  <Ul>
    <Li
      style={{ backgroundColor: '#e6f7ff', color: '#5a6e7f' }}
      title="#f54d4f"
    >
      <span>#e6f7ff</span>
      <span>Select</span>
    </Li>
    <Li style={{ backgroundColor: '#40a9ff' }}>
      <span>#40a9ff</span>
      <span>Hover</span>
    </Li>
    <Li style={{ backgroundColor: '#1890ff' }}>
      <span>#1890ff</span>
      <span>Normal</span>
    </Li>
    <Li style={{ backgroundColor: '#096dd9' }}>
      <span>#096dd9</span>
      <span>Click</span>
    </Li>
  </Ul>
);
```

## 功能色

功能色代表了明确的信息以及状态，比如成功、出错、失败、提醒、链接等。功能色的选取需要遵守用户对色彩的基本认知。我们建议在一套产品体系下，功能色尽量保持一致，不要有过多的自定义干扰用户的认知体验。

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
  padding: 2rem;
  background-image: linear-gradient(to right, #fff 50%, #000 0);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 1.25rem;
  color: #f0f8ff;
  border-radius: 2px;
  margin-top: 2px;
`;

export default () => (
  <Ul>
    <Li style={{ backgroundColor: '#1890ff' }} title="#f54d4f">
      <span>#1890ff</span>
      <span>Primary</span>
    </Li>
    <Li style={{ backgroundColor: '#52c41a' }}>
      <span>#52c41a</span>
      <span>Success</span>
    </Li>
    <Li style={{ backgroundColor: '#f8ad13' }}>
      <span>#f8ad13</span>
      <span>Warning</span>
    </Li>
    <Li style={{ backgroundColor: '#f54d4f' }}>
      <span>#f54d4f</span>
      <span>Error</span>
    </Li>
  </Ul>
);
```
