---
title: 响应式
group:
  title: 结构与布局
  order: 3
---

## 单位

- px：绝对长度单位
- rem：相对根元素的长度单位，常用于响应式布局
- em： 相对于父元素的长度单位

## rem

- 阶梯性

## vw/vh

- vh 网页视口高度的 1/100
- vw 网页视口宽度的 1/100
- vmax 取两者最大值
- vmin 取两者最小值

## Breakpoints

```css
@media only screen and (max-width: 374px) {
  /* iphone5 或者更小的尺寸，以 iphone5 的宽度（320px）比例设置 font-size */
  html {
    font-size: 86px;
  }
}
@media only screen and (min-width: 375px) and (max-width: 413px) {
  /* iphone6/7/8 和 iphone x */
  html {
    font-size: 100px;
  }
}
@media only screen and (min-width: 414px) {
  /* iphone6p 或者更大的尺寸，以 iphone6p 的宽度（414px）比例设置 font-size */
  html {
    font-size: 110px;
  }
}

// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  ...;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  ...;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  ...;
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  ...;
}
```
