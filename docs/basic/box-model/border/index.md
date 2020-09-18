---
title: 边框

group:
  title: 盒子模型
  path: /box-model
  order: 30
---

## 半透明边框

<code src="./demo/Demo2.tsx" />

## 多重边框

### box-shadow

> `box-shadow` 属性用于在元素的框架上添加阴影效果，该属性可设置的值包括`X轴偏移`、`Y轴偏移`、`阴影模糊半径`、`阴影扩散半径`，和`阴影颜色`，并以多个逗号分隔。

<code src="./demo/Demo3.tsx" />

- 投影的行为跟边框不完全一致，因为它不会影响布局，而且也不会
  受到 box-sizing 属性的影响。不过，你还是可以通过内边距或外边
  距（这取决于投影是内嵌和还是外扩的）来额外模拟出边框所需要
  占据的空间。
- 上述方法所创建出的假“边框”出现在元素的外圈。它们并不会响
  应鼠标事件，比如悬停或点击。如果这一点非常重要，你可以给
  box-shadow 属性加上 inset 关键字，来使投影绘制在元素的内圈。
  请注意，此时你需要增加额外的内边距来腾出足够的空隙。

### 倒三角

**思考**：为什么能用以下几行 css 就能画一个倒三角

<code src="./demo/TriangleStep.tsx" />

画一个正方形，分别设置四个方向的边框，并用不同的颜色区分相邻的边框，这时我们得到第一个图形，可以看出其实边框是由四个矩形组成

```css
.triangle {
  width: 60px;
  height: 60px;
  border-top: 12px solid;
  border-right: 12px solid skyblue;
  border-bottom: 12px solid;
  border-left: 12px solid skyblue;
}
```

将宽高都设置为 0，这时就能得到一个由四个三角形拼成的一个正方形，如第二个图形

```css
.triangle {
  width: 0;
  height: 0;
  border-top: 12px solid;
  border-right: 12px solid skyblue;
  border-bottom: 12px solid;
  border-left: 12px solid skyblue;
}
```

去除下边框,这时我们得到第三个图形

```css
.triangle {
  width: 0;
  height: 0;
  border-top: 12px solid;
  border-right: 12px solid skyblue;
  border-left: 12px solid skyblue;
}
```

把左右边框的颜色设置为透明，这时就能得到我们想要的倒三角

```css
.triangle {
  width: 0;
  height: 0;
  border-top: 12px solid;
  border-right: 12px solid transparent;
  border-left: 12px solid transparent;
}
```

**思考**：用 css 画出另外三个方向的三角形

<code src="./demo/Triangle.tsx" />
