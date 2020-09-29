---
title: 文字与段落
---

## vertical-align

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

---

## White Space

`white-space`是用来设置如何处理元素中的空白。

### normal

连续的空白符会被合并，换行符会被当作空白符来处理。换行在填充「行框盒子(line boxes)」时是必要。

### nowrap

和 normal 一样，连续的空白符会被合并。但文本内的换行无效。

### pre

连续的空白符会被保留。在遇到换行符或者`<br>`元素时才会换行。

### pre-wrap

连续的空白符会被保留。在遇到换行符或者`<br>`元素，或者需要为了填充「行框盒子(line boxes)」时才会换行。

### pre-line

连续的空白符会被合并。在遇到换行符或者`<br>`元素，或者需要为了填充「行框盒子(line boxes)」时会换行。

### break-spaces

与 pre-wrap 的行为相同，除了：

- 任何保留的空白序列总是占用空间，包括在行尾。
- 每个保留的空格字符后都存在换行机会，包括空格字符之间。
- 这样保留的空间占用空间而不会挂起，从而影响盒子的固有尺寸（最小内容大小和最大内容大小）。

|              | 换行符 | 空格和制表符 | 文字换行 | 行尾空格 |
| ------------ | ------ | ------------ | -------- | -------- |
| normal       | 合并   | 合并         | 换行     | 删除     |
| nowrap       | 合并   | 合并         | 不换行   | 删除     |
| pre          | 保留   | 保留         | 不换行   | 保留     |
| pre-wrap     | 保留   | 保留         | 换行     | 挂起     |
| pre-line     | 保留   | 合并         | 换行     | 删除     |
| break-spaces | 保留   | 保留         | 换行     | 换行     |

## line-height

- 写具体数值，如 30px，则继承该值
- 写比例，如 1.5，则继承该比例
- 写百分比，如 150%， **则继承计算出来的值**
