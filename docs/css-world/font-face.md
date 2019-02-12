# @font face

> @font face 规则支持的 CSS 属性有 font-family、src、font-style、font-weigh、
> unicode-range、font-variant、font-stretch 和 font-feature-settings。

```css
@font-face {
 font-family: 'example';
 src: url(example.ttf);
 font-style: normal;
 font-weight: normal;
 unicode-range: U+0025-00FF;

 font-variant: small-caps;
 font-stretch: expanded;
 font-feature-settings："liga1" on;
}
```

## font-family

```css
@font-face {
  font-family: "$";
  src: url(example.tff);
}
```

::: tip

- `font-family` 可以看成是一个字体变量，名称可以非常随意，就是使用这些稀奇古
  怪的字符或者空格的时候，一定要加引号。
- 但是有一类名称不能随便设置，就是原本系统就有的字体
  名称。
  :::

## src

```css
@font-face {
  font-family: ICON;
  src: url("icon.eot") format("eot");
  src: url("icon.eot?#iefix") format("embedded-opentype"), url("icon.woff2")
      format("woff2") url("icon.woff") format("woff"),
    url("icon.ttf") format("typetrue"), url("icon.svg#icon") format("svg");
  font-weight: normal;
  font-style: normal;
}
```

::: tip

- svg 格式是为了兼容 iOS 4.1 及其之前的版本，考虑到现如今 iOS 的版本数已经翻了一
  番，所以 svg 格式的兼容代码大可舍弃。
- eot 格式是 IE 私有的。注意，目前所有版本的 IE 浏览器都支持 eot 格式，并不是只
  有 IE6 ～ IE8 支持。只是，IE6 ～ IE8 仅支持 eot 这一种字体格式。
- woff 是 web open font format 几个词的首字母简写，是专门为 Web 开发而设计的字体格式，显然是优先使用的字体格式，其字体尺寸更小，加载更快。Android 4.4 开始全面支持。
- woff2 是比 woff 尺寸更小的字体，小得非常明显。因此，Web 开发第一首选字体就
  是 woff2，只是此字体目前仅 Chrome 和 Firefox 支持得比较好。
- ttf 格式作为系统安装字体比较多，Web 开发也能用，就是尺寸大了点儿，优点在于
  老版本 Android 也支持。
  :::

## 最终

··
