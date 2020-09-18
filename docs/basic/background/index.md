---
title: 背景
---

## 背景与边框

默认情况下，`背景会延伸到边框所在的区域下层`。我们可以通过 `background-clip` 属性来调整上述默认行为所带来的不便。这个属性的初始值是 `border-box`，意味着背景会被元素的 `border box`
（边框的外沿框）裁切掉。如果不希望背景侵入边框所在的范围，我们要做
的就是把它的值设为 `padding-box`，这样浏览器就会用内边距的外沿来把背
景裁切掉。具体效果可以看以下 demo

<code src="./demo/Demo1.tsx" inline />

## background-position

<code src="./demo/Position.tsx"  />

关键字

```css
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;
```

关键字 `top`, `left`, `bottom`, `right` 中的一个。用来指定把这个项目（原文为 item）放在哪一个边缘。另一个维度被设置成 50%，所以这个项目（原文为 item）被放在指定边缘的中间位置。也就相当已下面的代码

```css
background-position: top center;
background-position: bottom center;
background-position: left center;
background-position: right center;
background-position: center center;
```

---

## background-attachment

`background-attachment`决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。

### fixed

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

### scroll

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

### local

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

---

## background-clip

`background-attachment`决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。

### fixed

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

---

## background-origin

`background-origin` 规定了指定背景图片 background-image 属性的原点位置的背景相对区域.

### border-box

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

### padding-box(默认)

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

### content-box

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
