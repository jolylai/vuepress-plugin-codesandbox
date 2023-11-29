# 主题

```
.
├── base.less      # 基础样式入口
└── normalize.less  # 样式重置
├── css-variables.less # css 变量
├── animation.less  # 动画
├── mixins
│   ├── clearfix.less # 清除浮动
│   ├── ellipsis.less # 文字溢出省略号
│   └── hairline.less # 1px 边框
```

## CSS 变量

[vant](https://github.com/youzan/vant/blob/17a65c147162be4fe4a475b450c462d61c4879d5/packages/vant/src/style/css-variables.less) 的 css 变量


## 样式重置

```css
html {
  -webkit-tap-highlight-color: transparent;
}

:root {
  margin: 0;
  font-family: var(--van-base-font);
}

a {
  text-decoration: none;
}

input,
button,
textarea {
  color: inherit;
  font: inherit;
}

a,
input,
button,
textarea,
[class*='van-'] {
  &:focus {
    outline: none;
  }
}

ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

```css
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html,
body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}
```

**reference**

- [custom-css-reset](https://www.joshwcomeau.com/css/custom-css-reset/)
