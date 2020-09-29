---
title: 内边距
order: 2
---

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  a + a::before {
    content: '';
    font-size: 0;
    padding: 10px 3px 1px;
    margin-left: 6px;
    border-left: 1px solid gray;
  }
`;

export default () => (
  <Container>
    <a href="#">登录</a>
    <a href="#">注册</a>
  </Container>
);
```
