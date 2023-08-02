# 响应式布局

媒体查询可以根据用户设备、浏览器或系统设置的匹配条件修改外观(甚至行为)或网站或应用程序。

## 使用媒体查询

```html
<html>
  <head>
    <!-- Served to all users -->
    <link rel="stylesheet" href="all.css" media="all" />
    <!-- Served to screens that are at least 20em wide -->
    <link rel="stylesheet" href="small.css" media="(min-width: 20em)" />
    <!-- Served to screens that are at least 64em wide -->
    <link rel="stylesheet" href="medium.css" media="(min-width: 64em)" />
    <!-- Served to screens that are at least 90em wide -->
    <link rel="stylesheet" href="large.css" media="(min-width: 90em)" />
    <!-- Served to screens that are at least 120em wide -->
    <link rel="stylesheet" href="extra-large.css" media="(min-width: 120em)" />
    <!-- Served to print media, like printers -->
    <link rel="stylesheet" href="print.css" media="print" />
  </head>
  <!-- ... -->
</html>
```

不同屏幕尺寸的设备下载对应的样式文件，这是一个非常好的方式来进行性能优化

但需要明确的是，这并不总是阻止不匹配这些媒体查询的样式表下载，它只是为它们分配了一个较低的加载优先级。
因此，如果像手机这样的小屏幕设备访问该网站，它将只下载媒体查询中与它的视口大小匹配的样式表。但是如果出现一个更大的桌面屏幕，它将下载所有这些查询，因为它匹配所有这些查询。

我们也可以直接在 `<style>` 元素上使用媒体查询:

```html
<style>
  p {
    background-color: blue;
    color: white;
  }
</style>

<style media="all and (max-width: 500px)">
  p {
    background-color: yellow;
    color: blue;
  }
</style>
```

## 深色模式

```css
body {
  filter: invert(1) hue-rotate(180deg);
  background-color: #000;
}
img {
  filter: invert(1) hue-rotate(180deg);
}
```
