---
title: vertical-align
---

`vertical-align` 属性值分为以下 4 类

- 线类，如 `baseline`(默认值)、`top`、`middle`、`bottom`;
- 文本类，如 `text-top`、`text-bottom`;
- 上标下标类，如 `sub`、`super`;
- 数值百分比类，如 `20px`、`2em`、`20%`等。

vertical-align:baseline 等同于 vertical-align:0

vertical- align 属性的百分比值则是相对于 line-height 的计算值计算的。

## 作用的前提

只能应用于内联元 素以及 display 值为 table-cell 的元素。

浮动和绝对定位会让元素块状化，因此，下面的代码组合 vertical-align 是没有理由 出现的

```css
.example {
  float: left;
  /* 没有作用 */
  vertical-align: middle;
}
.example {
  position: absolute;
  /* 没有作用 */
  vertical-align: middle;
}
```

<code inline src="./demos/VerticalAlign.jsx" />
