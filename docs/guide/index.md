---
title: 概览

group:
  title: 概览
  path: /guide
  order: 1
---

## 调色板

<code src="./demo/Palette.tsx" inline />

## 网站

- [CSS Reference](https://cssreference.io/typography/)
- [Enjoy CSS](https://enjoycss.com/)
- [CSS Tricks](https://css-tricks.com/)
- [UI](https://coderthemes.com/hyper/saas/maps-google.html)
- [Hover](https://github.com/IanLunn/Hover)

## 配色

- [中国色](http://zhongguose.com/#baochunhong)
- [Flatuicolors](https://flatuicolors.com/)
- [Adobe](https://color.adobe.com/create/)
- [LolColors](http://www.lolcolors.com)

## 格式化语法

```
flex: none | auto | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

CSS 语法中的特殊符号的含义绝大多数就是正则表达式中的含义，例如单管道符|，方括号[]，问号？，个数范围花括号{}等

首先是单管道符|。表示排他。也就是这个符号前后的属性值都是支持的，且不能同时出现。因此，下面这些语法都是支持的：

```
flex: auto;
flex: none;

flex: [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

接下来是[ ... ]这一部分。其中方括号[]表示范围。也就是支持的属性值在这个范围内。我们先把方括号[]内其他特殊字符去除，可以得到下面的语法：

```
flex: auto;
flex: none;

flex: [ <'flex-grow'> <'flex-shrink'> <'flex-basis'> ]
```

这就是说，flex 属性值支持空格分隔的 3 个值，因此，下面的语法都是支持的。

```
flex: auto;
flex: none;
/* 3个值 */
flex: 1 1 100px;
```

然后我们再看方括号[]内的其他字符，例如问号?，表示 0 个或 1 个。也就是 flex-shrink 属性可有可无。因此，flex 属性值也可以是 2 个值。因此，下面的语法都是支持的。

```
flex: auto;
flex: none;
/* 2个值 */
flex: 1 100px;
/* 3个值 */
flex: 1 1 100px;
```

然后我们再看双管道符||，是或者的意思。表示前后可以分开独立合法使用。也就是 flex: flex-grow flex-shrink?和 flex-basis 都是合法的。于是我们又多了 2 种合法的写法：

```
flex: auto;
flex: none;
/* 1个值，flex-grow */
flex: 1;
/* 1个值，flex-basis */
flex: 100px;
/* 2个值，flex-grow和flex-basis */
flex: 1 100px;
/* 2个值，flex-grow和flex-shrink */
flex: 1 1;
/* 3个值 */
flex: 1 1 100px;
```

//zxx: 评论有人反馈，IE 和 Chrome 的默认值不一样，因此，建议实际开发都写全 3 个值。
