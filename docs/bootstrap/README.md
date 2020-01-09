# 设计规范

> [Ant Design 设计规范](https://ant.design/docs/spec/introduce-cn)

[BootStrap CSS](https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap.css)

## 字体家族

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
```

## em rem

em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。

浏览器的默认字体都是 16px

|     | 2    | 4   | 6    | 8   | 10   | 12  | 14   | 16  |
| --- | ---- | --- | ---- | --- | ---- | --- | ---- | --- |
| 16  | .125 | .25 | .375 | .5  | .625 | .75 | .875 | 1   |
