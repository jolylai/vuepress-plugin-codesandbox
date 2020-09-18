---
title: background-origin
---

`background-origin` 规定了指定背景图片 background-image 属性的原点位置的背景相对区域.

## border-box

背景图片的摆放以 border 区域为参考

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 4px dashed;
  padding: 2rem;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 64px 64px;
  background-origin: border-box;
  background-image: url(https://cssreference.io/images/jt.png);
`;

const Content = styled.p`
  padding: 0.75rem 1.25rem;
  background-color: rgba(198, 246, 213, 0.5);
`;

export default () => {
  return (
    <Container>
      <Content>Content</Content>
    </Container>
  );
};
```

## padding-box(默认)

背景图片的摆放以 padding 区域为参考

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 4px dashed;
  padding: 2rem;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 64px 64px;
  background-image: url(https://cssreference.io/images/jt.png);
`;

const Content = styled.p`
  padding: 0.75rem 1.25rem;
  background-color: rgba(198, 246, 213, 0.5);
`;

export default () => {
  return (
    <Container>
      <Content>Content</Content>
    </Container>
  );
};
```

## content-box

背景图片的摆放以 content 区域为参考

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 4px dashed;
  padding: 2rem;
  background-color: #fff;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: 64px 64px;
  background-image: url(https://cssreference.io/images/jt.png);
`;

const Content = styled.p`
  padding: 0.75rem 1.25rem;
  background-color: rgba(198, 246, 213, 0.5);
`;

export default () => {
  return (
    <Container>
      <Content>Content</Content>
    </Container>
  );
};
```
