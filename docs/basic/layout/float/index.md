---
title: 浮动
order: 2
group:
  title: 结构与布局
---

<code inline src="./demo/Float.jsx" />

**浮动的本质就是为了实现文字环绕效果。**

## 特性

### 包裹性

包裹性，由“包裹”和“自适应性”两部分组成。

```html
<div class="father">
  <div class="float">
    <img src="1.jpg" />
  </div>
</div>
```

<code src="./demo/Demo1.tsx" />

**包裹**

假设浮动元素父元素宽度 200px，浮动元素子元素是一个 128px 宽度的图片，
则此时浮动元素宽度表现为“包裹”，就是里面图片的宽度 128px。

**自适应性**

如果浮动元素的子元素不只是一张 128px 宽度的图片，还有一大波普通
的文字，则此时浮动元素宽度就自适应父元素的 200px 宽度，最终的宽度表现也是 200px。

要想最大宽度自适应父元素宽度，一定是在浮动元素的“首选最小宽度”比父元素的宽度要小的前提下

### 块状化

块状化的意思是，元素一旦 `float` 的属性值不为 `none`，则其 `display` 计算值就是 `block`
或者 `table`。

```css
span {
  display: block; /* 多余 */
  float: left;
}
```

也不要指望使用 `text-align` 属性控制浮动元素的左右对齐，因为 `text-align` 对块级
元素是无效的。

```css
span {
  float: left;
  vertical-align: middle; /* 多余 */
}
```

除了 `inline-table` 计算为 `table` 外，其他全都是`block`。至于 `float` 元素的块状格
式化上下文特性

<!-- ### 格式化上下文 -->
<!-- todo -->

### 破坏文档流

浮动元素的父元素高度塌陷

<code src="./demo/Demo5.tsx" />

浮动后面元素 `margin` 负无穷大依然无效

“行框盒子如果和浮动元素的垂直高度有重叠，则行框盒子在正常定位状态下只会跟随浮动元素，而不会发生重叠”。

```css
.content {
  margin-left: -100px;
}
```

<code src="./demo/Demo6.tsx" />

内联状态下的图片底部是有间隙的，也就是`.float` 这个浮动元素的实际高度
并不是 `64px`，而是要比 `64px` 高几像素，带来的问题就是浮动元素的高度超出`.father` 几像素。

<!-- ### 没有任何 margin 合并 -->

<!-- todo -->

## 流体布局

### 对齐

在 CSS 世界中，float 元素的“浮动参考”是“行框盒子”，也就是 float 元素在当前
“行框盒子”内定位。再强调一遍，是“行框盒子”，不是外面的包含块盒子之类的东西，因为
CSS 浮动设计的初衷仅仅是实现文字环绕效果。

<code src="./demo/Demo2.tsx" />

- **浮动锚点**是 float 元素所在的“流”中的一个点，这个点本身并不浮动，就表现而言
  更像一个没有 margin、border 和 padding 的空的内联元素。
- **浮动参考**指的是浮动元素对齐参考的实体。

### 作用机制

### 两栏自适应布局

<code src="./demo/Demo3.tsx" />

### 多栏布局

<code src="./demo/Demo4.tsx" />

## 清除浮动

> 元素盒子的边不能和前面的浮动元素相邻。

## 双飞翼布局

- 三栏布局，中间一栏最先加载和渲染
- 两侧内容固定，中间内容随着宽度自适应
- 使用 float 布局
- 两侧使用 margin 负值以便和中间内容横向重叠
- 防止中间内容被两侧覆盖，一个使用 padding 一个用 margin

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Header = styled.header``;

const Container = styled.main`
  padding-left: 200px;
  padding-right: 150px;
`;

const Footer = styled.footer`
  clear: both;
`;

const Content = styled.div`
  background-color: #05ffb0;
  width: 100%;
  float: left;
`;

const Left = styled.div`
  background-color: #00e7eb;
  width: 200px;
  float: left;
  margin-left: -100%;
  position: relative;
  right: 200px;
`;

const Right = styled.div`
  background-color: #ffdd57;
  width: 150px;
  float: left;
  margin-right: -150px;
`;

export default () => {
  return (
    <>
      <Header>Header</Header>
      <Container>
        <Content>Content</Content>
        <Left>Left</Left>
        <Right>Right</Right>
      </Container>
      <Footer>Footer</Footer>
    </>
  );
};
```

## 双飞翼布局

```jsx | inline
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: 200px;
  margin-right: 150px;
  background-color: #05ffb0;
`;

const Content = styled.div`
  width: 100%;
  float: left;
`;

const Left = styled.div`
  background-color: #00e7eb;
  width: 200px;
  float: left;
  margin-left: -100%;
`;

const Right = styled.div`
  background-color: #ffdd57;
  width: 150px;
  float: left;
  margin-left: -150px;
`;

export default () => {
  return (
    <>
      <Content>
        <Container>Content</Container>
      </Content>
      <Left>Left</Left>
      <Right>Right</Right>
    </>
  );
};
```
