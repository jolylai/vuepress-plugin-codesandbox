# 内置样式

默认包含了一些常用样式，可以直接通过 className 的方式使用。

## 安全区

为元素添加安全区适配。

```css
.van-safe-area-top {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}

.van-safe-area-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```

## 文字省略

单行文字省略

```css
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

多行文字省略

```css
.ellipsis-l2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;

  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}
```

## 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

这是因为 devicePixelRatio 特性导致。css 设置的 1px 是 css 像素，而 UI 稿上指的是设备像素，它们之间存在一个比例关系，即，devicePixelRatio。iPhone 的 devicePixelRatio == 2，而 border-width: 1px 描述的是 css 像素，所以，border 被放大到物理像素 2px 显示，在 iPhone 上就显得较粗。

```css
.hairline {
  position: relative;
}

.hairline::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;

  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border: 0 solid #ebedf0;
  transform: scale(0.5);
}
```

## 触碰反馈

为元素添加触碰反馈效果，触碰后，元素的透明度会降低。通常用于按钮等可点击的元素上。

```css
.haptics-feedback {
  cursor: pointer;
}

.haptics-feedback:active {
  opacity: 0.6;
}
```

## 清除浮动

清除元素在 float 布局下的浮动，

```css
.clearfix:after {
  display: table;
  clear: both;
  content: '';
}
```

## 滚动条

```css
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  width: 6px;
  background: rgba(#101f1c, 0.1);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(#101f1c, 0.5);
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(#101f1c, 1);
}
```
