# 文本控制

## text-indent

::: demo

```html
<template>
  <main>
    <p class="cw-text-indent text1">Notebook CSS</p>
    <p class="cw-text-indent text2">Notebook CSS</p>
  </main>
</template>

<style>
  .cw-text-indent {
    margin: 1em auto;
    width: 120px;
    outline: 1px solid;
  }
  .cw-text-indent.text1 {
    text-indent: -120px;
  }
  .cw-text-indent.text2 {
    text-indent: -100%;
  }
</style>

<script>
  export default {};
</script>
```

:::

::: tip
text-indent 的百分比值是相对于当前元素的“包含块”计算的，而不是当前元素。由
于 text-indent 最终作用的是当前元素里的内联盒子，因此很容易让人误以为 text-indent
的百分比值是相对于当前元素宽度计算的。
:::

### text-indent 百分比值与居中效果

::: demo

```html
<template>
  <main>
    <p class="cw-text-indent-center">
      <img src="/images/delete@2x.png" alt="delete" />
    </p>
  </main>
</template>

<style>
  .cw-text-indent-center {
    text-indent: 50%;
  }
  .cw-text-indent-center img {
    margin-left: -32px;
  }
</style>

<script>
  export default {};
</script>
```

:::

::: tip

- 由于 text-align 属性的存在，这种居中小技巧平常使用的机
  会很少，除非是 text-align 不能设置为 center 的场景。
- 理解百分比值的计算
  :::

::: demo

```html
<template>
  <main>
    <p class="cw-text-indent-question">提问：问题1</p>
    <p class="cw-text-indent-question">回答：回答1</p>
  </main>
</template>

<style>
  .cw-text-indent-question {
    text-indent: -3em;
    padding-left: 3em;
  }
</style>

<script>
  export default {};
</script>
```

:::

## letter-spacing

::: demo

```html
<template>
  <main>
    <p class="cw-letter-spacing">
      我是标题文字内容
    </p>
  </main>
</template>

<style>
  .cw-letter-spacing {
    width: 8em;
    margin: auto;
    white-space: nowrap;
    animation: textIn 1s both;
  }
  @keyframes textIn {
    0% {
      opacity: 0;
      letter-spacing: -200px;
    }
    60% {
      letter-spacing: 5px;
    }
    100% {
      opacity: 1;
      letter-spacing: 0;
    }
  }
</style>

<script>
  export default {};
</script>
```

:::

:::tip
由于 IE 浏览器的 letter-spacing 负值
不会有反向排列效果，因此，此技术目前只适合移动端这类无
须关心 IE 浏览器的项目。
:::

### 让多按钮的时候中间自动有合适的间距

::: demo

```html
<template>
  <main class="cw-word-spacing-buttons">
    <button>button</button>
    <button>button</button>
    <button>button</button>
  </main>
</template>

<style>
  .cw-word-spacing-buttons {
    word-spacing: 8px;
  }
</style>

<script>
  export default {};
</script>
```

:::

```css
.buttons {
  word-spacing: 8px;
}

button + button {
  margin-left: 8px;
}
```

## text-transform

::: demo

```html
<template>
  <main>
    <p>身份证：<input class="cw-text-transform" /></p>
    <p>
      验证码：<input class="cw-text-transform" size="6" />
      <img src="/images/vcode.png" alt="vocde" />
    </p>
  </main>
</template>

<style>
  .cw-text-transform {
    text-transform: uppercase;
  }
  .cw-text-transform + img {
    vertical-align: middle;
  }
</style>

<script>
  export default {};
</script>
```

:::
