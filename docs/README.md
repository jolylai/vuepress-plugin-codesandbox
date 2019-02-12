# Hello VuePress!

::: demo [vanilla]

```html
<html>
  <p>文字<img src="/images/delete@2x.png" alt="foo" /></p>
</html>

<style>
  p {
    font-size: 14px;
    animation: fontSize 5s infinite alternate ease-in-out;
  }
  p > img {
    width: 16px;
    height: 16px;
    /* 下面的ex实现是为了方便大家对比效果 */
    /* vertical-align: .6ex; */
    vertical-align: 25%;
    position: relative;
    top: 8px;
  }
  @keyframes fontSize {
    to {
      font-size: 60px;
    }
  }
</style>
```

:::

## hhh

::: demo

```html
<template>
  <div class="fontSizeEm">中文中文</div>
</template>
<script>
  export default {};
</script>
<style>
  .fontSizeEm {
    font-size: 14px;
    width: 140px;
    line-height: 1;
    background-color: #eee;
  }
</style>
```

:::
