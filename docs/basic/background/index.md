---
title: 背景
---

## 背景与边框

默认情况下，`背景会延伸到边框所在的区域下层`。我们可以通过 `background-clip` 属性来调整上述默认行为所带来的不便。这个属性的初始值是 `border-box`，意味着背景会被元素的 `border box`
（边框的外沿框）裁切掉。如果不希望背景侵入边框所在的范围，我们要做
的就是把它的值设为 `padding-box`，这样浏览器就会用内边距的外沿来把背
景裁切掉。具体效果可以看以下 demo

<code src="./demo/Demo1.tsx" inline />

### background-position

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
