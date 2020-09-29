---
title: 宽高计算
---

```jsx | inline
import React, { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px dashed #05ffb0;
  box-sizing: content-box;
`;

export default () => {
  const ref = useRef();
  const handleRef = ref => {
    console.log('ref: ', ref.offsetWidth);
  };
  return (
    <div>
      <Container ref={ref} />
      <ul>
        <li>offsetWidth : {useRef.current && useRef.current.offsetWidth} </li>
      </ul>
    </div>
  );
};
```
